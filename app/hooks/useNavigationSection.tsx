import { RefObject, useEffect } from "react";
import { SectionId, useActiveSectionStore } from "@/app/store/useActiveSectionStore";
import { useInView } from "framer-motion";

export default function useNavigationSection(ref: RefObject<HTMLElement>, id: SectionId) {
    // Negative margin reduces the observed area within the viewport. (Positive margin extends it
    // outside the viewport).
    // "-50% 0%" means to reduce the observed area both from top and bottom by 50%. The area is now considered a line
    // inView will be true if the referenced element touches the center-line of the screen
    const inView = useInView(ref, { margin: "-50% 0%" });
    const setActiveSectionId = useActiveSectionStore((state) => state.setActiveSectionId);

    // With useEffect, we avoid to update zustand-state during render which would result in a warning.
    // ("Can't update component while rendering a different component")
    //
    // With useEffect we first finish rendering the component that calls this hook,
    // then update the state, then render all components that depend on that state.
    //
    // Note: It is a valid pattern to update the state of a component during its OWN render:
    // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    // But here, without useEffect we would update a different component's state during render.
    useEffect(() => {
        if (!inView) {
            return;
        }

        setActiveSectionId(id);
    }, [id, inView, setActiveSectionId]);
}
