import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Container from "../../ui/Container";
import ExpensesNavBar from "../ExpensesNavBar";
import Expenses from "./Expenses";
import Loading from "../../widgets/Loading";
import { getLastDayInMonthInfo, getWeekDayName } from "../../../helper-functions/format-date";

export default function ExpensesMonthView() {
    const persistedExps = JSON.parse(localStorage.getItem('expenses')) || [];
    const [expenses, setExpenses] = useState([]);
    const [date, setDate] = useState(null)

    useEffect(() => {
        setDate(new Date());
        getExpenses(new Date());
    }, []);

    function getExpenses(date) {
        const month = date.getMonth();
        const year = date.getFullYear();
        const numOfDaysInMonth = getLastDayInMonthInfo(date).lastDayInMonth;

        let expsForMonth = initializeExpsForMonth(numOfDaysInMonth, month, year);
        expsForMonth = getExpsForMonth(month, year, expsForMonth);
        setExpenses(expsForMonth);
    }

    function initializeExpsForMonth(numOfDaysInMonth, month, year) {
        const expsForMonth = [];
        for (let day = 1; day <= numOfDaysInMonth; day++) {
            expsForMonth[day] = {
                day,
                dayName: getWeekDayName(new Date(year, month, day).getDay()),
                amount: 0,
                details: []
            }
        }
        return expsForMonth;
    }

    function getExpsForMonth(month, year, expsForMonth) {
        for (let i = 0; i < persistedExps.length; i++) {
            const expDate = new Date(persistedExps[i].date);
            if (expDate.getFullYear() === year && expDate.getMonth() === month) {
                const expDay = expDate.getDate();
                expsForMonth[expDay].amount += Number(persistedExps[i].amount);
                expsForMonth[expDay].details.push(persistedExps[i]);
            }
        }
        // removing item at index 0, as its existence is not required anymore
        expsForMonth.shift();
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
                                <Expenses
                                    expenses={expenses}
                                    month={date.getMonth()}
                                    year={date.getFullYear()} />
                            </Container>
                        </Grid>
                    </Grid>
                </>
                : <Loading />}
        </>
    )
}