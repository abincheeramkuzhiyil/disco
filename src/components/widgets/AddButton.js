import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function AddButton(props) {
    const navigate = useNavigate();

    function redirectToHandler() {
        navigate(props.redirectUrl, { state: props.state });
    }

    const styles = {
        addTodo: { position: 'fixed', bottom: 20, right: 10 },
    };

    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={styles.addTodo}
            onClick={redirectToHandler}
        >
            <AddIcon />
        </Fab>
    );
}
