import React, { useState } from "react";
import { Table, TableBody, TableContainer } from "@mui/material";

import ExpensesFooter from "../ExpensesFooter";
import ExpensesHeader from "../ExpensesHeader";
import Expense from "./Expense";
import { EXPENSES_VIEW_TYPE } from "../../../constants/expenses-view-type";
import ExpensesDayDetails from "./ExpensesDayDetails";
import { getMonthName } from "../../../helper-functions/format-date";

export default function Expenses(props) {
    const [expDetailsForSelectedDay, setExpDetailsForSelectedDay] = useState(null);

    function openExpsDetailsForDayHandler(expDetails, day, dayName) {
        setExpDetailsForSelectedDay({
            day,
            dayName,
            details: expDetails
        });
    }

    function closeExpsDetailsHandler() {
        setExpDetailsForSelectedDay(null);
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
                                openExpsDetailsForDayHandler={openExpsDetailsForDayHandler} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <ExpensesFooter total={total} />

            {expDetailsForSelectedDay
                ? <ExpensesDayDetails
                    day={expDetailsForSelectedDay.day}
                    dayName={expDetailsForSelectedDay.dayName}
                    month={props.month}
                    monthName={getMonthName(props.month)}
                    year={props.year}
                    closeExpsDetails={closeExpsDetailsHandler}
                    expenses={expDetailsForSelectedDay.details} />
                : <></>}
        </>
    );
}