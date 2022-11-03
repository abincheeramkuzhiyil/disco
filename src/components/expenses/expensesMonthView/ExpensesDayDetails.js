import { AppBar, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import Expenses from "../expensesDayView/Expenses";
import Container from "../../ui/Container";

export default function ExpensesDayDetails(props) {
    console.log('test', props)
    const [open, setOpen] = useState(true);

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
                <AppBar sx={{ position: 'sticky' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {`${props.dayName}, ${props.day} ${props.monthName} ${props.year}`}
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
                            <Expenses expenses={props.expenses} />
                        </Container>
                    </Grid>
                </Grid>

            </Dialog>
        </div>
    );
}