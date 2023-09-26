import { inView } from "framer-motion";
import { SectionId, useActiveSectionStore } from "@/store/useActiveSectionStore";
import { useEffect } from "react";

export enum SectionAreaId {
    intro = "section-area-intro",
    projects = "section-area-projects",
    skills = "section-area-skills",
    codeExamples = "section-area-codeExamples",
    aboutMe = "section-area-aboutMe",
    puzzle = "section-area-puzzle",
    zoom = "section-area-zoom",
    dots = "section-area-dots",
}

export interface ActiveSectionHandlerProps {}

export default function ActiveSectionHandler(props: ActiveSectionHandlerProps) {
    const setActiveSectionId = useActiveSectionStore((state) => state.setActiveSectionId);

    function setInViewCallback(sectionId: SectionId, sectionAreaId: SectionAreaId) {
        return inView(`.${sectionAreaId}`, () => {
            setActiveSectionId(sectionId);
        });
    }

    useEffect(() => {}, []);

    return null;
}
