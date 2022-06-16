import React from 'react';

import ExpensesHeader from '../ExpensesHeader';
import Expense from './expense/Expense'
import ExpensesFooter from '../ExpensesFooter';
import { EXPENSES_VIEW_TYPE } from '../../../constants/expenses-view-type';

export default function Expenses(props) {
    let total = 0;

    return (
        <>
            <ExpensesHeader viewType={EXPENSES_VIEW_TYPE.day} />

            {props.expenses.map((expense) => {
                expense.amount = parseInt(expense.amount).toFixed(2);
                total = total + parseInt(expense.amount);
                return <Expense key={expense.id} expense={expense} onDeleteClick={props.onDeleteClick} />;
            })}

            <ExpensesFooter total={total} />
        </>
    );
}
