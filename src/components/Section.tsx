"use client";

import { ReactNode, useEffect, useRef } from "react";
import { SectionId, useActiveSectionStore } from "@/store/useActiveSectionStore";
import { useInView } from "framer-motion";

export interface SectionProps {
    sectionId: SectionId;
    children?: ReactNode;
}

// This is a client component. But children can still be server components!
// Remember: Only >>importing<< a component from a client-component makes it a client component.

export default function Section(props: SectionProps) {
    const ref = useRef(null);

    // Negative margins reduce the observed area within the viewport. (Positive margins extend it
    // outside the viewport).
    // "-50% 0%" means to reduce the observed area both from top and bottom by 50%. The area is now treated as a line
    // inView will be true if the referenced element touches the center-line of the screen
    const inView = useInView(ref, { margin: "-50% 0%" });
    const setActiveSectionId = useActiveSectionStore((state) => state.setActiveSectionId);

    // With useEffect, we avoid to update zustand-state during render which would result in a warning.
    // ("Can't update component while rendering a different component")
    //
    // With useEffect we first finish rendering the parent component,
    // then update the zustand-state, then render all components that depend on that state.
    //
    // Note: It would be a valid pattern to update the state of a component during its OWN render:
    // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    // But here, without useEffect we would update a different component's state during render.
    useEffect(() => {
        if (!inView) {
            return;
        }

        setActiveSectionId(props.sectionId);
    }, [props.sectionId, inView, setActiveSectionId]);

    return <div ref={ref}>{props.children}</div>;
}
