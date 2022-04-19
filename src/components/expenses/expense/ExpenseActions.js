import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ExpenseActions() {
    const styles = {
        container: { textAlign: 'right', marginTop: '0.5rem' },
    };

    return (
        <div style={styles.container}>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
            >
                <Button startIcon={<EditIcon />}>Edit</Button>
                <Button color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </ButtonGroup>
        </div>
    );
}
