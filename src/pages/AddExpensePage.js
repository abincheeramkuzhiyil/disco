import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../components/widgets/FormHeader';
import AddExpense from '../components/expenses/AddExpense';

export default function AddExpensePage() {
    const navigate = useNavigate();

    function cancelAndGoBackHandler() {
        navigate('/expenses');
    }

    return (
        <>
            <FormHeader
                heading="Add Expense"
                onBtnBackClick={cancelAndGoBackHandler}
            />
            <AddExpense />
        </>
    );
}
