import { RefObject, useEffect } from "react";
import { SectionId, useActiveSectionStore } from "@/app/store/useActiveSectionStore";
import { useInView } from "framer-motion";

export default function useNavigationSection(ref: RefObject<HTMLElement>, id: SectionId) {
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
