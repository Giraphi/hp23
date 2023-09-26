import { ReactNode } from "react";
import { cn } from "@/util/functions";

export interface OverlayTextProps {
    children: ReactNode;
    disableSpace?: boolean;
}

export default function OverlayTextArea(props: OverlayTextProps) {
    return (
        <div className={cn("col-start-2 col-end-6 md:col-end-8 lg:col-start-3 lg:col-end-[13] ", { "pb-8 lg:pb-16": !props.disableSpace })}>
            {props.children}
        </div>
    );
}
