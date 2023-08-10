import React from "react";
import { SectionId } from "@/app/store/useActiveSectionStore";

export interface ScrollTargetProps {
    id: SectionId;
    disableOffset?: boolean;
}

export default function ScrollTarget(props: ScrollTargetProps) {
    return (
        <div
            id={`${props.id}`}
            className={!props.disableOffset ? "relative bottom-5" : ""}
        />
    );
}
