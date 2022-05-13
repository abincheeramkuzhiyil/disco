import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export default function ExpenseActions(props) {
    const navigate = useNavigate();

    function editHandler() {
        const expenseId = props.id;
        navigate(`/edit-expense/${expenseId}`);
    }

    function deleteHandler() {
        if (window.confirm('Are you sure you want to delete?')) {
            const expenseId = props.id;
            props.onDeleteClick(expenseId)
        }
    }

    const styles = {
        container: { textAlign: 'right', marginTop: '0.5rem' },
    };

    return (
        <div style={styles.container}>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
            >
                <Button
                    startIcon={<EditIcon />}
                    onClick={editHandler}
                >
                    Edit
                </Button>
                <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={deleteHandler}
                >
                    Delete
                </Button>
            </ButtonGroup>
        </div>
    );
}
