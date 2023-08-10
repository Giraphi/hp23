import { ReactNode } from "react";
import { SectionId, useActiveSectionStore } from "@/app/store/useActiveSectionStore";

export interface TopBarItemProps {
    id: SectionId;
    children: ReactNode;
    handleClick?: () => void;
}

export default function TopBarItem(props: TopBarItemProps) {
    const activeSectionId = useActiveSectionStore((state) => state.activeSectionId);

    function handleClick() {
        const target = document.querySelector(`#${props.id}`);
        target && target.scrollIntoView({ behavior: "smooth" });
        props.handleClick && props.handleClick();
    }

    return (
        <div
            className={`${activeSectionId === props.id ? "text-pink-600" : ""} cursor-pointer pb-3 text-base`}
            onClick={handleClick}
        >
            {props.children}
        </div>
    );
}
