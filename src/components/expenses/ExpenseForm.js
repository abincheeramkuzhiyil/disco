import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Container from '../ui/Container';
import { formatDateForDateControl } from '../../helper-functions/change-date'

export default function ExpenseForm(props) {
    const [date, setDate] = useState('');
    const [spentOn, setSpentOn] = useState('');
    const [amount, setAmount] = useState('');
    const [details, setDetails] = useState('');

    useEffect(() => onLoadHandler(), []);
    function onLoadHandler() {
        if (props.mode === 'edit') {
            setDate(props.expDetails.date)
            setSpentOn(props.expDetails.spentOn);
            setAmount(props.expDetails.amount);
            setDetails(props.expDetails.details);
        }
        else {
            const formattedDate = formatDateForDateControl(props.date);
            setDate(formattedDate);
        }
    }

    function submitHandler(event) {
        event.preventDefault();

        let expense = { date, spentOn, amount, details };
        props.onSubmitClick(expense);
    }

    const styles = {
        formControl: { minWidth: 250, width: { xs: '100%', md: 'initial' } },
    };

    return (
        <Container>
            <form onSubmit={submitHandler}>
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
                            value={date}
                            onChange={event => setDate(event.target.value)}
                        />
                        <div className="mt-1">
                            <TextField
                                id="spent-on"
                                label="Spent on"
                                variant="filled"
                                sx={styles.formControl}
                                value={spentOn}
                                onChange={event => setSpentOn(event.target.value)}
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
                                value={amount}
                                onChange={event => setAmount(event.target.value)}
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
                                value={details}
                                onChange={event => setDetails(event.target.value)}
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
