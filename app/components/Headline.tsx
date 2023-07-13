import React, { ReactNode } from "react";

export interface HeadlineProps {
    type?: "h1" | "h2";
    children: ReactNode;
    className?: string;
}

export default function Headline(props: HeadlineProps) {
    return (
        <h1 className={`xlg:text-7xl} pb-2 text-center font-delaGothicOne text-4xl md:pb-0 md:text-left md:text-6xl ${props.className}`}>
            {props.children}
        </h1>
    );
}
