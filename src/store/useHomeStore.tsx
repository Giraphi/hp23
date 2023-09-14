import { create } from "zustand";

export const useHomeStore = create<{
    scrolledIntoProjectsSection: boolean;
}>((set) => ({
    scrolledIntoProjectsSection: false,
}));
