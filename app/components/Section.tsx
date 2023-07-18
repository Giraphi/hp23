import React, { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode;
    startDark?: boolean;
}

export default function Section(props: SectionProps) {
    return (
        <div className={`bg-gradient-to-b ${props.startDark ? "from-gray-2 to-gray-3" : "from-gray-3 to-gray-2"}`}>{props.children}</div>
    );
}
