import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TodayIcon from '@mui/icons-material/Today';
import { changeDate } from '../../helper-functions/change-date';

export default function ExpensesNavBar(props) {
    const [date, setDate] = useState(new Date());
    const [btnTodayState, toggleBtnTodayState] = useState(true);

    function changeDateClickHandler(numOfDays) {
        const newDate = changeDate(date, numOfDays);
        setDate(newDate);
        toggleBtnTodayState(false);
        props.changeDate(newDate);
    }

    function todayClickHandler() {
        let today = new Date();
        setDate(today);
        props.changeDate(today);
        toggleBtnTodayState(true);
    }

    const styles = {
        icon: { fontSize: '2rem' },
    };

    return (
        <>
            <Paper elevation={1} sx={{ position: 'sticky', top: '0', zIndex: 1 }}>
                <Grid
                    container
                    spacing={0}
                    sx={{ p: 1.5, alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <IconButton onClick={() => changeDateClickHandler(-1)}>
                            <KeyboardArrowLeftIcon sx={styles.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ textAlign: 'center' }}>
                        <Stack>
                            <Typography sx={{ fontWeight: 600 }}>
                                {date.toDateString()}
                            </Typography>
                            <Typography variant="caption">
                                <b>Total:</b> &#8377;100.00
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <IconButton onClick={() => changeDateClickHandler(1)}>
                                    <KeyboardArrowRightIcon sx={styles.icon} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    onClick={todayClickHandler}
                                    disabled={btnTodayState}
                                >
                                    <TodayIcon sx={styles.icon} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}