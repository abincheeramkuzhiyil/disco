import React from "react";

import ExpensesFooter from "../ExpensesFooter";
import ExpensesHeader from "../ExpensesHeader";
import Expense from "./Expense";
import { EXPENSES_VIEW_TYPE } from "../../../constants/expenses-view-type";
import { Table, TableBody, TableContainer } from "@mui/material";

export default function Expenses(props) {
    let total = 0;

    console.log('props', props.expenses)

    return (
        <>
            <ExpensesHeader viewType={EXPENSES_VIEW_TYPE.month} />

            <TableContainer sx={{ backgroundColor: '#fff' }}>
                <Table>
                    <TableBody>
                        {props.expenses.map((expense, index) => {
                            expense.amount = Number(expense.amount).toFixed(2);
                            total = total + Number(expense.amount);
                            return <Expense key={expense.day} expense={expense} rowNumber={index + 1} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <ExpensesFooter total={total} />
        </>
    );
}