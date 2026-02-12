import { create } from 'zustand';

export const useHabitStore = create((set, get) => ({
    habits: []
}));

