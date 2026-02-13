import { create } from 'zustand';

export const useHabitStore = create((set, get) => ({
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
}));

