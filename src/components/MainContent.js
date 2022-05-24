import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '../pages/HomePage.js';
import LocateItemsPage from '../pages/LocateItemsPage.js';
import TodosPage from '../pages/TodosPage.js';
import AddTodoPage from '../pages/AddTodoPage.js';
import ExpensesPage from '../pages/ExpensesPage.js';
import AddExpensePage from '../pages/AddExpensePage.js';
import EditExpensePage from '../pages/EditExpensePage.js';

export default function MainContent() {
    const styles = {
        mainContent: { margin: '0.5rem' }
    }

    return (
        <main style={styles.mainContent}>
            <Routes>
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/add-todo" element={<AddTodoPage />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/add-expense" element={<AddExpensePage />} />
                <Route path="/edit-expense/:expenseId" element={<EditExpensePage />} />
                <Route path="/locate-items" element={<LocateItemsPage />} />
                <Route path="/disco" element={<Navigate replace to="/" />} />
                <Route path="/" exact element={<HomePage />} />
            </Routes>
        </main>
    );
}
