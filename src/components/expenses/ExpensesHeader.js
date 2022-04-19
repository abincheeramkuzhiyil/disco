import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function ExpensesHeader() {
    return (
        <Accordion expanded={false}>
            <AccordionSummary aria-controls="panel-content" id="panel-header">
                <Typography sx={{ width: '60%', flexShrink: 0, fontWeight: 600 }}>
                    Spent on
                </Typography>
                <Typography
                    sx={{ mr: 4, width: '40%', fontWeight: 600, textAlign: 'right' }}
                >
                    Amount <span style={{ color: '#777', fontWeight: 400 }}>(Rs.)</span>
                </Typography>
            </AccordionSummary>
        </Accordion>
    );
}
