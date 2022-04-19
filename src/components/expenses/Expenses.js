import React from 'react';

import ExpensesHeader from './ExpensesHeader';
import Expense from './expense/Expense';
import ExpensesFooter from './ExpensesFooter';

export default function Expenses(props) {
    let total = 0;

    return (
        <>
            <ExpensesHeader />

            {props.expenses.map((expense) => {
                expense.amount = parseInt(expense.amount).toFixed(2);
                total = total + parseInt(expense.amount);
                return <Expense key={expense.id} expense={expense} />;
            })}

            <ExpensesFooter total={total} />
        </>
    );
}
