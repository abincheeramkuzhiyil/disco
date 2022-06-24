import { AppBar, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import Expenses from "../expensesDayView/Expenses";
import Container from "../../ui/Container";
import { getExpensesForDay } from "../../../stores/expenses-store";

export default function ExpensesDayDetails(props) {
    const [open, setOpen] = useState(true);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses(props.date);
    }, []);


    function getExpenses(date) {
        const expensesForDay = getExpensesForDay(props.persistedExps, date);
        setExpenses(expensesForDay);
    }

    function handleClose() {
        setOpen(false);
        props.closeExpsDetails();
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const styles = {
        mainContent: { margin: '0.5rem' },
        total: { fontSize: '1rem' }
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {props.date.toDateString()}
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <br />

                <Grid container spacing={0} style={styles.mainContent}>
                    <Grid item xs={12} md={6}>
                        <Container>
                            <Expenses expenses={expenses} />
                        </Container>
                    </Grid>
                </Grid>

            </Dialog>
        </div>
    );
}