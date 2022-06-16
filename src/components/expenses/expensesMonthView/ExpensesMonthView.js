import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Container from "../../ui/Container";
import ExpensesNavBar from "../ExpensesNavBar";
import Expenses from "./Expenses";
import Loading from "../../widgets/Loading";
import { getMonthAndYear, getLastDayInMonthInfo, getWeekDayName } from "../../../helper-functions/format-date";

export default function ExpensesMonthView() {
    const persistedExp = JSON.parse(localStorage.getItem('expenses')) || [];
    const [expenses, setExpenses] = useState([]);
    const [date, setDate] = useState(null)

    useEffect(() => {
        setDate(new Date());
        getExpenses(new Date());
    }, []);

    function getExpenses(date) {
        const month = date.getMonth();
        const year = date.getFullYear();

        let expsForMonth = getExpDetailsForSpentDays(month, year);
        const numOfDaysInMonth = getLastDayInMonthInfo(date).lastDayInMonth;
        expsForMonth = setExpDetailsToNonSpentDays(expsForMonth, numOfDaysInMonth, month, year);
        expsForMonth.shift();
        setExpenses(expsForMonth);
    }

    function getExpDetailsForSpentDays(month, year) {
        const expsForMonth = [];
        for (let i = 0; i < persistedExp.length; i++) {
            const expDate = new Date(persistedExp[i].date);

            if (expDate.getMonth() === month && expDate.getFullYear() === year) {
                const expDay = expDate.getDate();
                const totalAmountForDay = expsForMonth[expDay] && expsForMonth[expDay].amount;
                if (totalAmountForDay) {
                    expsForMonth[expDay].amount = totalAmountForDay + Number(persistedExp[i].amount)
                } else {
                    expsForMonth[expDay] = {
                        day: `${getWeekDayName(expDate.getDay())} ${expDay}`,
                        amount: Number(persistedExp[i].amount)
                    }
                }
            }
        }
        return expsForMonth;
    }

    function setExpDetailsToNonSpentDays(expsForMonth, numOfDaysInMonth, month, year) {
        for (let day = 1; day <= numOfDaysInMonth; day++) {
            if (!expsForMonth[day]) {
                let expDate = new Date(year, month, day)
                expsForMonth[day] = {
                    day: `${getWeekDayName(expDate.getDay())} ${day}`,
                    amount: 0
                }
            }
        }
        return expsForMonth;
    }

    function changeDateHandler(date) {
        setDate(date);
        getExpenses(date);
    }

    return (
        <>
            {(date)
                ?
                <>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Container>
                                <ExpensesNavBar
                                    date={date}
                                    rateOfChange={'monthly'}
                                    changeDate={changeDateHandler}
                                />
                                <br />
                                <Expenses expenses={expenses} />
                            </Container>
                        </Grid>
                    </Grid>
                </>
                : <Loading />}
        </>
    )
}