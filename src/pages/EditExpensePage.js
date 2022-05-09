import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FormHeader from '../components/widgets/FormHeader';
import AddExpense from '../components/expenses/AddExpense';

export default function EditExpensePage() {
    const urlPathParams = useParams();
    const navigate = useNavigate();
    const [expDetails, setExpDetails] = useState();

    useEffect(() => onLoadHandler(), [])
    function onLoadHandler() {
        const persistedExp = JSON.parse(localStorage.getItem('expenses'));
        setExpDetails(persistedExp.find(e => e.id == urlPathParams.expenseId));
    }

    function editExpenseHandler(expense) {
        expense = { id: expDetails.id, ...expense }

        const expenses = JSON.parse(localStorage.getItem('expenses'));
        const index = expenses.findIndex(e => e.id == urlPathParams.expenseId)
        if (index === -1) {
            alert('Expense you are trying to edit does not exist.');
        } else {
            expenses[index] = expense;
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        const state = { date: expDetails.date }
        navigate('/expenses', { state });
    }

    function cancelAndGoBackHandler() {
        navigate('/expenses');
    }

    return (
        <>
            <FormHeader
                heading="Edit Expense"
                onBtnBackClick={cancelAndGoBackHandler}
            />
            {expDetails
                ? <AddExpense
                    mode="edit"
                    expDetails={expDetails}
                    onSubmitClick={editExpenseHandler} />
                : <div>Expense not found to edit.</div>}

        </>
    );
}