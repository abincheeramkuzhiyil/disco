import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React from "react";

export default function Expense(props) {
    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row">
                    {props.expense.day}
                </TableCell>
                <TableCell align="right">
                    {props.expense.amount}
                </TableCell>
            </TableRow>
        </>
    )
}