import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function ExpensesFooter(props) {
    return (
        <Accordion expanded={false}>
            <AccordionSummary aria-controls="panel-footer" id="panel-footer">
                <Typography sx={{ width: '60%', flexShrink: 0, fontWeight: 600 }}>
                    Total
                </Typography>
                <Typography
                    sx={{ mr: 4, width: '40%', fontWeight: 600, textAlign: 'right' }}
                >
                    {props.total.toFixed(2)}
                </Typography>
            </AccordionSummary>
        </Accordion>
    );
}
