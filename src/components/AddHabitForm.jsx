import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import { useHabitStore } from '../store/store.js';

export const AddHabitForm = () => {
    const [name, setName] = useState('');
    const [frequency, setFrequency] = useState("daily");
    const { habits, addHabbit } = useHabitStore();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addHabbit(name, frequency);
            setName('');
        };
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap:2,
            }}>
                <TextField
                    label="Habit Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter habit name"
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        label="Frequency"
                        onChange={(e) => setFrequency(e.target.value)}
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Add Habit
                </Button>
            </Box>
        </form>
    )
}