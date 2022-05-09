import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ExpenseActions from './ExpenseActions';

export default function Expense(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange() {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <Accordion expanded={isExpanded} onChange={handleChange}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '60%', flexShrink: 0 }}>
                        {props.expense.spentOn}
                    </Typography>
                    <Typography sx={{ mx: 1, width: '40%', textAlign: 'right' }}>
                        {props.expense.amount}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>Details:</b> {props.expense.details}
                    </Typography>
                    <ExpenseActions id={props.expense.id} />
                </AccordionDetails>
            </Accordion>
        </>
    );
}
