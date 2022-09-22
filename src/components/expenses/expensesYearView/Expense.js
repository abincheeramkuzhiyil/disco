import React, { useState } from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getLastDayInMonthInfo, getWeekDayName } from "../../../helper-functions/format-date";

/**
 *
 * @param {Object} props
 * @param {number} props.year
 * 
 * @param {Object} props.expense - contains expense info of a month
 * @param {number} props.expense.month
 * @param {string} props.expense.monthName
 * @param {number} props.expense.amount - total expense amount of a month
 *
 * @param {Object[]} props.expense.details - details of all expenses happened in month
 * @param {number} props.expenses.details[].id
 * @param {string} props.expenses.details[].date
 * @param {string} props.expenses.details[].spentOn
 * @param {string} props.expenses.details[].amount
 * @param {string} props.expenses.details[].details
 */
export default function Expense(props) {
    const [expDetailsFormatted, setExpDetailsFormatted] = useState(null);

    function openExpDetailsForMonthHandler() {
        if (!expDetailsFormatted) {
            const detailsFormatted = getFormattedExpDetails();
            props.openExpDetailsForMonthHandler(detailsFormatted, props.expense.month, props.expense.monthName);
            setExpDetailsFormatted(detailsFormatted);
        } else {
            props.openExpDetailsForMonthHandler(expDetailsFormatted, props.expense.month, props.expense.monthName);
        }
    }

    function getFormattedExpDetails() {
        let expsForMonth = initExpDetailsFormatted(props.expense.month);
        const expenses = props.expense.details;

        for (let i = 0; i < expenses.length; i++) {
            const day = new Date(expenses[i].date).getDate();
            expsForMonth[day].amount = expsForMonth[day].amount + Number(expenses[i].amount);
            expsForMonth[day].details.push(expenses[i]);
        }

        return expsForMonth;
    }

    function initExpDetailsFormatted(month) {
        const date = new Date(props.year, month, 1);
        const numOfDaysInMonth = getLastDayInMonthInfo(date).lastDayInMonth;

        let expsForMonth = [];
        for (let day = 1; day <= numOfDaysInMonth; day++) {
            let expDate = new Date(props.year, month, day)
            expsForMonth[day] = {
                day: day,
                dayName: getWeekDayName(expDate.getDay()),
                amount: 0,
                details: []
            }
        }
        return expsForMonth;
    }

    const styles = {
        month: { fontSize: '1rem', lineHeight: '1.1', width: '57.6%' },
        amount: { fontSize: '1rem', lineHeight: '1.1', width: '37.5%' },
        monthDetails: { lineHeight: '1.1', width: '5%', padding: 0, paddingRight: '19px' }
    }

    return (
        <>
            <TableRow
                sx={Number(props.expense.amount) ? { opacity: 1 } : { opacity: 0.6 }}
                onClick={openExpDetailsForMonthHandler}
            >
                <TableCell component="th" scope="row" style={styles.month}>
                    {props.expense.monthName}
                </TableCell>
                <TableCell align="right" style={styles.amount}>
                    {props.expense.amount}
                </TableCell>
                <TableCell style={styles.monthDetails}>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </TableCell>
            </TableRow></>
    );
}