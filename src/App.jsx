import './App.css'
import {Container, Box, Typography} from '@mui/material';
import { AddHabitForm } from './components/AddHabitForm.jsx';
import { HabitList } from './components/HabitList.jsx';

function App() {
  return (
    <Container>
        <Box>
            <Typography variant="h1" component="h2" gutterBottom align="center">
                Habit Tracker
            </Typography>
        </Box>
        <AddHabitForm />
        <HabitList />
    </Container>
  )
}

export default App
