import { Box, Paper, GridLegacy, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from '@mui/icons-material/Delete';
import { useHabitStore } from "../store/store.js";

export const HabitList = () => {
    const { habits } = useHabitStore();

    const today = new Date().toISOString().split('T')[0];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 4,
        }}>
            {
                habits.map((habit) => (
                    <Paper key={habit.id} elevation={2} sx={{p: 2}}>
                        <GridLegacy container alignItems="center">
                            <GridLegacy xs={12} sm={6}>
                                <Typography variant="h6">
                                    {habit.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {habit.frequency}
                                </Typography>
                            </GridLegacy>
                            <GridLegacy xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                    <Button variant="outlined" color={habit.completedDates.includes(today) ? 'success' : 'primary'} startIcon={<CheckCircleIcon />}>
                                        {
                                            habit.completedDates.includes(today) ? 'Completed' : 'Mark as Completed'
                                        }
                                    </Button>
                                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                                        Remove
                                    </Button>
                                </Box>
                            </GridLegacy>
                        </GridLegacy>
                    </Paper>
                ))
            }
        </Box>
    )
}