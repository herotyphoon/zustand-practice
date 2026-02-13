import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useHabitStore = create(
    persist(
        (set, get) => ({
            habits: [],
            addHabbit: (name, frequency) => {
                set((state) => ({
                    habits: [
                        ...state.habits,
                        {
                            id: Date.now().toString(),
                            name,
                            frequency,
                            completedDates: [],
                            createdAt: new Date().toISOString(),
                        }
                    ]
                }));
            },
            removeHabit: (id) => {
                set((state) => ({
                    habits: state.habits.filter(habit => habit.id !== id)
                }));
            },
            toggleHabit: (id, date) =>
                set((state) => ({
                habits: state.habits.map((habit) =>
                    habit.id === id
                    ? {
                        ...habit,
                        completedDates: habit.completedDates.includes(date)
                            ? habit.completedDates.filter((d) => d !== date)
                            : [...habit.completedDates, date],
                        }
                    : habit
                )}
                )
            )
        }
    ),
    {
    name: 'habit-storage',
    }
));

