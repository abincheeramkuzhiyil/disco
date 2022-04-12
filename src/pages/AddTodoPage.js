import React from 'react';
import { useNavigate } from 'react-router-dom';

import FormHeader from '../components/widgets/FormHeader';
import AddTodo from '../components/todos/AddTodo';

export default function AddTodoPage() {
    const navigate = useNavigate();

    function cancelAndGoBackHandler() {
        navigate('/todos');
    }

    return (
        <>
            <FormHeader heading="Add Todo" onBtnBackClick={cancelAndGoBackHandler} />
            <AddTodo onCancel={cancelAndGoBackHandler} />
        </>
    );
}
