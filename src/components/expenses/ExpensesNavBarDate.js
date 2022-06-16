import React from "react";

import { getMonthAndYear, getYear } from '../../helper-functions/format-date'
import { RATE_OF_CHANGE } from '../../constants/rate-of-change'

export default function ExpensesNavBarDate({ date, rateOfChange }) {
    return (
        <>
            {rateOfChange === RATE_OF_CHANGE.daily && date.toDateString()}
            {rateOfChange === RATE_OF_CHANGE.monthly && getMonthAndYear(date)}
            {rateOfChange === RATE_OF_CHANGE.yearly && getYear(date)}
        </>
    );
}