"use client";

import { ReactNode, useRef } from "react";
import useNavigationSection from "@/src/hooks/useNavigationSection";
import { SectionId } from "@/src/store/useActiveSectionStore";

export interface SectionProps {
    id: SectionId;
    children?: ReactNode;
}

// This is a client component. But children can still be server components!
// Remember: Only >>importing<< a component from a client-component makes it a client component.

export default function Section(props: SectionProps) {
    const ref = useRef(null);
    useNavigationSection(ref, props.id);

    return <div ref={ref}>{props.children}</div>;
}
