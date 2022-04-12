import Grid from '@mui/material/Grid';

import Todos from '../components/todos/Todos';
import Container from '../components/ui/Container';
import AddButton from '../components/widgets/AddButton';

export default function TodosPage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    return (
        <div>
            <h2>Todos</h2>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Todos todos={todos} />
                    </Container>
                </Grid>
            </Grid>
            <AddButton redirectUrl="/add-todo" />
        </div>
    );
}
