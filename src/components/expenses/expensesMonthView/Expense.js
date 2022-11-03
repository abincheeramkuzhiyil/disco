import React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Expense(props) {
    const styles = {
        day: { fontSize: '1rem', lineHeight: '1.1', width: '57.6%' },
        amount: { fontSize: '1rem', lineHeight: '1.1', width: '37.5%' },
        dayDetails: { lineHeight: '1.1', width: '5%', padding: 0, paddingRight: '19px' },
        dayName: { fontSize: '0.8rem' }
    }

    return (
        <>
            <TableRow
                sx={Number(props.expense.amount) ? { opacity: 1 } : { opacity: 0.6 }}
                onClick={() => props.openExpsDetailsForDayHandler(props.expense.details, props.expense.day, props.expense.dayName)}
            >
                <TableCell component="th" scope="row" style={styles.day}>
                    {props.expense.day} -
                    <span style={styles.dayName}> {props.expense.dayName}</span>
                </TableCell>
                <TableCell align="right" style={styles.amount}>
                    {props.expense.amount}
                </TableCell>
                <TableCell style={styles.dayDetails}>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        </>
    )
}