import React from "react";
import { SectionId } from "@/store/useActiveSectionStore";
import { cn } from "@/util/functions";

export interface ScrollTargetProps {
    id: SectionId;
    disableOffset?: boolean;
    className?: string;
}

export default function ScrollTarget(props: ScrollTargetProps) {
    return (
        <div
            id={`${props.id}`}
            className={cn({ "text- relative bottom-5": !props.disableOffset }, props.className)}
        />
    );
}
