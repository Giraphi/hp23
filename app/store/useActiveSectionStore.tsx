import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// export const sectionIds = {
//     intro: "intro",
//     projects: "projects",
//     skills: "skills",
//     codeExamples: "codeExamples",
//     aboutMe: "aboutMe",
// };

export enum SectionId {
    intro,
    projects,
    skills,
    codeExamples,
    aboutMe,
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
