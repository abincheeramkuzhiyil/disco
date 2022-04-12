import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Container from '../ui/Container';

export default function AddTodo(props) {
    const taskRef = useRef();
    const dueDateRef = useRef();
    const detailsRef = useRef();

    const navigate = useNavigate();

    function saveHandler(event) {
        event.preventDefault();
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const todo = {
            id: todos.length ? todos[0].id + 1 : 1,
            task: taskRef.current.value,
            dueDate: dueDateRef.current.value,
            details: detailsRef.current.value,
            isDone: false,
        };
        todos.unshift(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        navigate('/todos');
    }

    const styles = {
        formControl: { minWidth: 250, width: { xs: '100%', md: 'initial' } },
    };

    return (
        <Container>
            <form onSubmit={saveHandler} autoComplete="off">
                <Card>
                    <CardContent>
                        <TextField
                            id="task"
                            label="Task"
                            variant="filled"
                            sx={styles.formControl}
                            inputRef={taskRef}
                            required
                        />

                        <div className="mt-1">
                            <TextField
                                id="due-date"
                                label="Due date"
                                type="datetime-local"
                                variant="filled"
                                sx={{ minWidth: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputRef={dueDateRef}
                            />
                        </div>

                        <div className="mt-1">
                            <TextField
                                id="details"
                                label="Details"
                                multiline
                                rows="3"
                                variant="filled"
                                sx={styles.formControl}
                                inputRef={detailsRef}
                            />
                        </div>
                    </CardContent>
                    <CardActions
                        sx={{ justifyContent: 'flex-end', padding: '0 1rem 1rem;' }}
                    >
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ backgroundColor: '#393535' }}
                            onClick={props.onCancel}
                        >
                            cancel
                        </Button>
                        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Container>
    );
}
