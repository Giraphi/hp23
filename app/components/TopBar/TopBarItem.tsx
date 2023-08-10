import { ReactNode } from "react";
import { SectionId, useActiveSectionStore } from "@/app/store/useActiveSectionStore";

export interface TopBarItemProps {
    id: SectionId;
    children: ReactNode;
    handleClick?: () => void;
}

export default function TopBarItem(props: TopBarItemProps) {
    const activeSectionId = useActiveSectionStore((state) => state.activeSectionId);

    return (
        <a
            href={`#${props.id}`}
            className={`${activeSectionId === props.id ? "text-pink-600" : ""} pb-3 text-base`}
            onClick={props.handleClick}
        >
            {props.children}
        </a>
    );
}
