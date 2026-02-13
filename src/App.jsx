import './App.css'
import {useHabitStore} from './store/store.js';
import {Container, Box, Typography} from '@mui/material';
import { AddHabitForm } from './components/AddHabitForm.jsx';

function App() {

    // const habits = useHabitStore();
    // console.log(habits);

  return (
    <Container>
        <Box>
            <Typography variant="h1" component="h2" gutterBottom align="center">
                Habit Tracker
            </Typography>
        </Box>
        <AddHabitForm />
    </Container>
  )
}

export default App
