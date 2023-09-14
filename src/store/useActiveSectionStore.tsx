import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum SectionId {
    intro = "intro",
    projects = "projects",
    skills = "skills",
    codeExamples = "codeExamples",
    aboutMe = "aboutMe",
    puzzle = "puzzle",
    zoom = "zoom",
    dots = "dots",
}

type State = {
    activeSectionId: SectionId;
};

type Actions = {
    setActiveSectionId: (sectionId: SectionId) => void;
};

export const useActiveSectionStore = create(
    immer<State & Actions>((set) => ({
        activeSectionId: SectionId.intro,
        setActiveSectionId: (sectionId: SectionId) =>
            set((state) => {
                state.activeSectionId = sectionId;
            }),
    }))
);
