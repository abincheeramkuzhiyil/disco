import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/ui/Container';

export default function AddExpense(props) {
    const dateRef = useRef();
    const spentOnRef = useRef();
    const amountRef = useRef();
    const detailsRef = useRef();

    const navigate = useNavigate();

    function saveHandler(event) {
        event.preventDefault();
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const expense = {
            id: expenses.length ? expenses[0].id + 1 : 1,
            date: dateRef.current.value,
            spentOn: spentOnRef.current.value,
            amount: amountRef.current.value,
            details: detailsRef.current.value,
        };
        expenses.unshift(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        navigate('/expenses');
    }

    const styles = {
        formControl: { minWidth: 250, width: { xs: '100%', md: 'initial' } },
    };

    return (
        <Container>
            <form onSubmit={saveHandler}>
                <Card>
                    <CardContent>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            variant="filled"
                            sx={{ minWidth: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={dateRef}
                        />
                        <div className="mt-1">
                            <TextField
                                id="spent-on"
                                label="Spent on"
                                variant="filled"
                                sx={styles.formControl}
                                inputRef={spentOnRef}
                                required
                            />
                        </div>
                        <div className="mt-1">
                            <TextField
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                id="amount"
                                label="Amount"
                                variant="filled"
                                sx={styles.formControl}
                                inputRef={amountRef}
                                required
                            />
                        </div>
                        <div className="mt-1">
                            <TextField
                                id="details"
                                label="Details"
                                multiline
                                rows="3"
                                variant="filled"
                                sx={styles.formControl}
                                inputRef={detailsRef}
                            />
                        </div>
                    </CardContent>
                    <CardActions
                        sx={{ justifyContent: 'flex-end', padding: '0 1rem 1rem;' }}
                    >
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ backgroundColor: '#393535' }}
                            onClick={props.onCancel}
                        >
                            cancel
                        </Button>
                        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Container>
    );
}
