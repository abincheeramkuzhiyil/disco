import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';

import AddButton from '../../widgets/AddButton';
import Container from '../../ui/Container';
import Expenses from './Expenses';
import ExpensesNavBar from '../ExpensesNavBar';
import Loading from '../../widgets/Loading';

export default function ExpensesDayView() {
    const persistedExp = JSON.parse(localStorage.getItem('expenses')) || [];
    const [expenses, setExpenses] = useState([]);
    const [date, setDate] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.date) {
            setDate(new Date(location.state.date));
            getExpenses(new Date(location.state.date))
        } else {
            setDate(new Date());
            getExpenses(new Date());
        }
    }, []);

    function getExpenses(date) {
        let month = String(date.getMonth() + 1);
        month = month.length === 1 ? `0${month}` : month;

        let day = String(date.getDate());
        day = day.length === 1 ? `0${day}` : day;

        const dateString = `${date.getFullYear()}-${month}-${day}`;
        setExpenses(persistedExp.filter(e => e.date === dateString));
    }

    function changeDateHandler(date) {
        setDate(date);
        getExpenses(date);
    }

    function deleteExpenseHandler(expenseId) {
        const persistedExpIndex = persistedExp.findIndex(e => e.id == expenseId);
        if (persistedExpIndex === -1) {
            alert('Expense you are trying to delete does not exist.');
        } else {
            persistedExp.splice(persistedExpIndex, 1);
            localStorage.setItem('expenses', JSON.stringify(persistedExp));

            const index = expenses.findIndex(e => e.id == expenseId);
            expenses.splice(index, 1);

            setExpenses([...expenses]); // the spread operator is used to create a copy of the array, so that it create a new array and trigger state change
        }
    }

    const styles = {
        todosContainer: { padding: '1rem', backgroundColor: 'rgb(234, 238, 243)' },
        addTodo: { position: 'fixed', bottom: 20, right: 10 },
    };

    return (
        <>
            {(date)
                ?
                <>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Container>
                                <ExpensesNavBar
                                    date={date}
                                    rateOfChange={'daily'}
                                    changeDate={changeDateHandler}
                                />
                                <br />
                                <Expenses
                                    expenses={expenses}
                                    onDeleteClick={deleteExpenseHandler}>
                                </Expenses>
                            </Container>
                        </Grid>
                    </Grid>
                    <AddButton
                        redirectUrl="/add-expense"
                        state={{ date: date }}
                    />
                </>
                : <Loading />}

        </>
    );
}
