import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import ExpensesDayView from "../components/expenses/expensesDayView/ExpensesDayView";
import ExpensesMonthView from "../components/expenses/expensesMonthView/ExpensesMonthView";
import ExpensesYearView from "../components/expenses/expensesYearView/ExpensesYearView";
import { EXPENSES_VIEW_TYPE } from "../constants/expenses-view-type";

export default function ExpensesPage() {
    const [expensesViewType, setExpensesViewType] = useState(EXPENSES_VIEW_TYPE.day);
    const navigate = useNavigate();

    function expensesViewTypeChangeHandler(event) {
        const expViewType = event.target.value;
        setExpensesViewType(expViewType);

        if (expViewType === EXPENSES_VIEW_TYPE.day)
            navigate(`/expenses`);
        else if (expViewType === EXPENSES_VIEW_TYPE.month)
            navigate(`/expenses/month-view`);
        else if (expViewType === EXPENSES_VIEW_TYPE.year)
            navigate('/expenses/year-view')
    }

    return (
        <>
            <Grid container spacing={0} sx={{ marginTop: '-0.75rem' }}>
                <Grid item xs={6} md={3}>
                    <h2>Expenses</h2>
                </Grid>
                <Grid item xs={6} md={3} sx={{ textAlign: 'right' }}>
                    <FormControl variant="standard" sx={{ mt: 2, mb: 1 }}>
                        <InputLabel id="demo-simple-select-standard-label">View</InputLabel>
                        <Select
                            value={expensesViewType}
                            onChange={expensesViewTypeChangeHandler}
                            label="View"
                        >
                            <MenuItem value={EXPENSES_VIEW_TYPE.day}>Day</MenuItem>
                            <MenuItem value={EXPENSES_VIEW_TYPE.month}>Month</MenuItem>
                            <MenuItem value={EXPENSES_VIEW_TYPE.year}>Year</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Routes>
                <Route path="/" exact element={<ExpensesDayView />} />
                <Route path="/month-view" exact element={<ExpensesMonthView />} />
                <Route path="/year-view" element={<ExpensesYearView />} />
            </Routes>
        </>
    );
}