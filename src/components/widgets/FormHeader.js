import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function FormHeader(props) {
    return (
        <Grid container spacing={2}>
            <Grid item style={{ paddingLeft: '0.25rem' }}>
                <Button
                    style={{ minWidth: 0, zIndex: 1200 }}
                    onClick={props.onBtnBackClick}
                >
                    <ArrowBackIcon />
                </Button>
            </Grid>
            <Grid>
                <h2>{props.heading}</h2>
            </Grid>
        </Grid>
    );
}
