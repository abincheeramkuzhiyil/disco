import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage.js';
import LocateItemsPage from '../../pages/LocateItemsPage.js';
import TodosPage from '../../pages/TodosPage.js';
import AddTodoPage from '../../pages/AddTodoPage.js';
//import ExpensesPage from '../pages/Expenses-Page.js';
//import AddExpensePage from '../pages/AddExpensePage.js';

import styles from './MainContent.module.css'

export default function MainContent() {
    return (
        <main className={styles.mainContent}>
            <Routes>
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/add-todo" element={<AddTodoPage />} />
                {/* <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/add-expense" element={<AddExpensePage />} /> */}
                <Route path="/locate-items" element={<LocateItemsPage />} />
                <Route path="/" exact element={<HomePage />} />
            </Routes>
        </main>
    );
}
