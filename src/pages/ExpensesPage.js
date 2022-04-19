import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Expenses from '../components/expenses/Expenses';
import Container from '../components/ui/Container';
import AddButton from '../components/widgets/AddButton';
import ExpensesNavBar from '../components/expenses/ExpensesNavBar';

export default function ExpensesPage() {
    const persistedExp = JSON.parse(localStorage.getItem('expenses')) || [];
    const [expenses, setExpenses] = useState(persistedExp);

    useEffect(() => {
        getExpenses(new Date());
    }, []);

    function getExpenses(date) {
        let month = String(date.getMonth() + 1);
        month = month.length === 1 ? `0${month}` : month;
        const dateString = `${date.getFullYear()}-${month}-${date.getDate()}`;
        debugger;
        setExpenses(persistedExp.filter((e) => e.date === dateString));
    }

    const styles = {
        todosContainer: { padding: '1rem', backgroundColor: 'rgb(234, 238, 243)' },
        addTodo: { position: 'fixed', bottom: 20, right: 10 },
    };

    return (
        <div>
            <h2>Expenses</h2>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <ExpensesNavBar changeDate={getExpenses} />
                        <br />
                        <Expenses expenses={expenses}></Expenses>
                    </Container>
                </Grid>
            </Grid>
            <AddButton redirectUrl="/add-expense" />
        </div>
    );
}
