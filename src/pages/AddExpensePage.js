import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../components/widgets/FormHeader';
import AddExpense from '../components/expenses/AddExpense';

export default function AddExpensePage() {
    const navigate = useNavigate();

    function saveExpenseHandler(expense) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expense = {
            id: expenses.length ? expenses[0].id + 1 : 1,
            ...expense
        };
        expenses.unshift(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        navigate('/expenses');
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
            <AddExpense onSubmitClick={saveExpenseHandler} />
        </>
    );
}
