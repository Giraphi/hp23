import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionProps {
    children: ReactNode;
    startDark?: boolean;
    className?: string;
}

export default function Section(props: SectionProps) {
    return (
        <div
            className={twMerge(`bg-gradient-to-b ${props.startDark ? "from-gray-2 to-gray-3" : "from-gray-3 to-gray-2"}`, props.className)}
        >
            {props.children}
        </div>
    );
}
