import React, { useState, useRef } from 'react';

import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function Todo(props) {
    const markDoneInput = useRef();

    const [isDone, setIsDone] = useState(props.todo.isDone);

    function toggleMarkDoneHandler(todoId) {
        setIsDone(markDoneInput.current.checked);
        updateTodosData(todoId);
    }

    function updateTodosData(todoId) {
        const todos = JSON.parse(localStorage.getItem('todos'));
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        todos[todoIndex].isDone = markDoneInput.current.checked;
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {props.todo.task}
            </TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
                <Checkbox
                    inputRef={markDoneInput}
                    color="success"
                    checked={isDone}
                    onChange={() => toggleMarkDoneHandler(props.todo.id)}
                />
            </TableCell>
        </TableRow>
    );
}
