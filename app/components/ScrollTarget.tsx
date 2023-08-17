import React from "react";
import { SectionId } from "@/app/store/useActiveSectionStore";
import { cn } from "@/app/util/functions";

export interface ScrollTargetProps {
    id: SectionId;
    disableOffset?: boolean;
    className?: string;
}

export default function ScrollTarget(props: ScrollTargetProps) {
    return (
        <div
            id={`${props.id}`}
            className={cn({ "relative bottom-5": !props.disableOffset }, props.className)}
        />
    );
}
