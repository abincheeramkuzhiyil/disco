import React, { useState } from "react";

import ExpensesFooter from "../ExpensesFooter";
import ExpensesHeader from "../ExpensesHeader";
import Expense from "./Expense";
import { EXPENSES_VIEW_TYPE } from "../../../constants/expenses-view-type";
import { Table, TableBody, TableContainer } from "@mui/material";
import ExpensesDayDetails from "./ExpensesDayDetails";

export default function Expenses(props) {
    const [dateToGetExpsDetails, setDateToGetExpsDetails] = useState(null);

    function getExpsDetailsForDayHandler(dayInNumFormat) {
        const date = new Date(props.year, props.month, dayInNumFormat);
        setDateToGetExpsDetails(date);
    }

    function closeExpsDetailsHandler() {
        setDateToGetExpsDetails(null);
    }

    let total = 0;

    return (
        <>
            <ExpensesHeader viewType={EXPENSES_VIEW_TYPE.month} />

            <TableContainer sx={{ backgroundColor: '#fff' }}>
                <Table>
                    <TableBody>
                        {props.expenses.map((expense, index) => {
                            expense.amount = Number(expense.amount).toFixed(2);
                            total = total + Number(expense.amount);
                            return <Expense
                                key={expense.day}
                                expense={expense}
                                dayInNumFormat={index + 1}
                                getExpsDetailsForDay={getExpsDetailsForDayHandler} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <ExpensesFooter total={total} />

            {dateToGetExpsDetails
                ? <ExpensesDayDetails
                    date={dateToGetExpsDetails}
                    closeExpsDetails={closeExpsDetailsHandler}
                    persistedExps={props.persistedExps} />
                : <></>}
        </>
    );
}