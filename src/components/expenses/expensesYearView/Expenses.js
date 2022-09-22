import React, { useState } from "react";

import ExpensesHeader from "../ExpensesHeader";
import { EXPENSES_VIEW_TYPE } from "../../../constants/expenses-view-type";
import { Table, TableBody, TableContainer } from "@mui/material";
import ExpensesFooter from "../ExpensesFooter";
import Expense from "./Expense";
import ExpensesMonthDetails from "./ExpensesMonthDetails";

/**
 * @param {Object} props
 * @param {number} props.year - year selected by user in navbar
 * 
 * @param {Object[]} props.expenses - contains expense of each month of selected year
 * @param {number} props.expenses[].month
 * @param {string} props.expenses[].monthName
 * @param {number} props.expenses[].amount
 * 
 * @param {Object[]} props.expenses[].details - details of all expenses happened in month
 * @param {number} props.expenses[].details[].id
 * @param {string} props.expenses[].details[].date
 * @param {string} props.expenses[].details[].spentOn
 * @param {string} props.expenses[].details[].amount
 * @param {string} props.expenses[].details[].details
 */
export default function Expenses(props) {
    const [expDetailsForSelectedMonth, setExpDetailsForSelectedMonth] = useState(null);

    function openExpsDetailsForMonthHandler(expForSelectedMonthFormatted, month, monthName) {
        setExpDetailsForSelectedMonth({
            month,
            monthName,
            expenses: expForSelectedMonthFormatted
        });
    }

    function closeExpsDetailsForMonthHandler() {
        setExpDetailsForSelectedMonth(null)
    }

    let total = 0;

    return (
        <>
            <ExpensesHeader viewType={EXPENSES_VIEW_TYPE.year} />

            <TableContainer sx={{ backgroundColor: '#fff' }}>
                <Table>
                    <TableBody>
                        {props.expenses.map((expense, index) => {
                            expense.amount = Number(expense.amount).toFixed(2);
                            total = total + Number(expense.amount);
                            return <Expense
                                key={expense.month}
                                year={props.year}
                                expense={expense}
                                openExpDetailsForMonthHandler={openExpsDetailsForMonthHandler} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <ExpensesFooter total={total} />

            {expDetailsForSelectedMonth
                ? <ExpensesMonthDetails
                    year={props.year}
                    month={expDetailsForSelectedMonth.month}
                    monthName={expDetailsForSelectedMonth.monthName}
                    expenses={expDetailsForSelectedMonth.expenses}
                    closeExpsDetailsForMonthHandler={closeExpsDetailsForMonthHandler} />
                : <></>}
        </>
    );
}