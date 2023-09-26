"use client";

import PageNavigation from "@/components/PageNavigation/PageNavigation";
import { SectionId } from "@/store/useActiveSectionStore";
import { useHomeStore } from "@/store/useHomeStore";

export interface PageNavigationWrapperProps {}

export default function HomeNavigation(props: PageNavigationWrapperProps) {
    const { scrolledIntoProjectsSection } = useHomeStore();

    return (
        <>
            <PageNavigation
                visible={scrolledIntoProjectsSection}
                items={[
                    { id: SectionId.intro, label: "Intro" },
                    { id: SectionId.projects, label: "Projects" },
                    { id: SectionId.skills, label: "Skills" },
                    { id: SectionId.codeExamples, label: "Code Examples" },
                    { id: SectionId.aboutMe, label: "About Me" },
                ]}
            />
        </>
    );
}
