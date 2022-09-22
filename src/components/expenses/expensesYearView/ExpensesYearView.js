import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import Container from "../../ui/Container";
import ExpensesNavBar from "../ExpensesNavBar";
import { getMonthName } from "../../../helper-functions/format-date";
import Expenses from "./Expenses";
import Loading from "../../widgets/Loading";

export default function ExpensesYearView() {
    const persistedExps = JSON.parse(localStorage.getItem('expenses')) || [];
    const [expenses, setExpenses] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(new Date());
        getExpenses(new Date());
    }, []);

    function changeDateHandler(date) {
        setDate(date);
        getExpenses(date);
    }

    function getExpenses(date) {
        const year = date.getFullYear();

        let expsForYear = initializeExpsForYear();
        expsForYear = getExpsForYear(year, expsForYear);
        setExpenses(expsForYear);
    }

    function initializeExpsForYear() {
        let expsForYear = [];
        for (let month = 0; month < 12; month++) {
            expsForYear[month] = {
                month,
                monthName: getMonthName(month),
                amount: 0,
                details: []
            }
        }
        return expsForYear;
    }

    function getExpsForYear(year, expsForYear) {
        for (let i = 0; i < persistedExps.length; i++) {
            const expDate = new Date(persistedExps[i].date);
            if (expDate.getFullYear() === year) {
                const expMonth = expDate.getMonth();
                expsForYear[expMonth].amount += Number(persistedExps[i].amount);
                expsForYear[expMonth].details.push(persistedExps[i]);
            }
        }
        return expsForYear;
    }

    return (
        <>
            {(date)
                ?
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Container>
                            <ExpensesNavBar
                                date={date}
                                rateOfChange={'yearly'}
                                changeDate={changeDateHandler}
                            />
                            <br />
                            <Expenses expenses={expenses} year={date.getFullYear()} />
                        </Container>
                    </Grid>
                </Grid>
                :
                <Loading />}
        </>
    );
}