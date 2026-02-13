import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useHabitStore = create(
    persist(
        (set, get) => ({
            habits: [],
            isLoading: false,
            error: null,
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
            ),
            fetchHabits: async () => {
                set({ isLoading: true });
                try {

                    const currentHabits = get().habits;
                    if (currentHabits.length > 0) {
                        set({ isLoading: false });
                        return;
                    }
                    // Simulate API call
                    await new Promise((resolve) =>
                        setTimeout(() => resolve({ data: [] }), 1000)
                    );
                    const mockHabits = [
                        {
                            id: '1',
                            name: 'Drink Water',
                            frequency: 'Daily',
                            completedDates: ['2024-06-01', '2024-06-02'],
                            createdAt: '2024-06-01T00:00:00.000Z',
                        },
                        {
                            id: '2',
                            name: 'Exercise',
                            frequency: 'Daily',
                            completedDates: ['2024-06-01'],
                            createdAt: '2024-06-01T00:00:00.000Z', 
                        }
                    ]
                    set({ habits: mockHabits, isLoading: false });
                } catch (error) {
                    set({ error: 'Failed to fetch habits', isLoading: false });
                }
            }
        }
    ),
    {
    name: 'habit-storage',
    }
));

