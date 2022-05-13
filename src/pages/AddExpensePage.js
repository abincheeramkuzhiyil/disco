import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import FormHeader from '../components/widgets/FormHeader';
import ExpenseForm from '../components/expenses/ExpenseForm';

export default function AddExpensePage() {
    const navigate = useNavigate();
    const location = useLocation();

    function saveExpenseHandler(expense) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expense = {
            id: expenses.length ? expenses[0].id + 1 : 1,
            ...expense
        };
        expenses.unshift(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        const state = { date: expense.date }
        navigate('/expenses', { state });
    }

    function cancelAndGoBackHandler() {
        navigate('/expenses');
    }

    return (
        <>
            <FormHeader
                heading="Add Expense"
                onBtnBackClick={cancelAndGoBackHandler}
            />
            <ExpenseForm onSubmitClick={saveExpenseHandler} date={location.state.date} />
        </>
    );
}
