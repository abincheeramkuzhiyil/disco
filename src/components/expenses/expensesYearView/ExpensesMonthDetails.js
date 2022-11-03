import { AppBar, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import Container from "../../ui/Container";
import Expenses from "../expensesMonthView/Expenses";

export default function ExpensesMonthDetails(props) {
    const [open, setOpen] = useState(true);

    function handleClose() {
        setOpen(false);
        props.closeExpsDetailsForMonthHandler();
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const styles = {
        mainContent: { margin: '0.5rem' },
        total: { fontSize: '1rem' }
    }

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'sticky' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {`${props.monthName} ${props.year}`}
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

                <Grid container spacing={0}>
                    <Grid item xs={12} md={6} style={styles.mainContent}>
                        <Container>
                            <Expenses year={props.year} month={props.month} expenses={props.expenses} />
                        </Container>
                    </Grid>
                </Grid>

            </Dialog>
        </>
    );
}