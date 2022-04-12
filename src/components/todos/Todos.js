import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Todo from './Todo.js';

export default function Todos(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 600 }}>Task</TableCell>
                        <TableCell sx={{ fontWeight: 600, textAlign: 'center' }}>
                            Mark done
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
