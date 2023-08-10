import { RefObject } from "react";
import { SectionId, useActiveSectionStore } from "@/app/store/useActiveSectionStore";
import { useInView } from "framer-motion";

export default function useNavigationSection(ref: RefObject<HTMLElement>, id: SectionId) {
    const inView = useInView(ref, { margin: "-50% 0%" });
    const setActiveSectionId = useActiveSectionStore((state) => state.setActiveSectionId);
    // const activeSectionId = useActiveSectionStore((state) => state.activeSectionId);

    if (!inView) {
        return;
    }

    console.log(`call ${id}`);
    setActiveSectionId(id);
}
