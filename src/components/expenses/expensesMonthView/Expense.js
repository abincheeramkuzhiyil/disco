import React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Expense(props) {
    return (
        <>
            <TableRow sx={props.expense.amount !== '0.00' ? { opacity: 1 } : { opacity: 0.6 }}>
                <TableCell component="th" scope="row" sx={{ fontSize: '1rem', lineHeight: '1.1', width: '57.6%' }}>
                    {props.expense.day}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: '1rem', lineHeight: '1.1', width: '37.5%' }}>
                    {props.expense.amount}
                </TableCell>
                <TableCell sx={{ lineHeight: '1.1', width: '5%', padding: 0, paddingRight: '19px' }}>
                    <IconButton onClick={() => props.getExpsDetailsForDay(props.dayInNumFormat)}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        </>
    )
}