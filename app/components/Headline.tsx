import React, { ReactNode } from "react";

export interface HeadlineProps {
    type?: "h1" | "h2";
    children: ReactNode;
    className?: string;
}

export default function Headline(props: HeadlineProps) {
    const className = `xlg:text-7xl pb-2 text-center font-delaGothicOne text-4xl lg:pb-0 lg:text-left lg:text-6xl ${props.className}`;
    const type = props.type || "h2";

    return (
        <>
            {type === "h1" && <h1 className={className}>{props.children}</h1>}
            {type === "h2" && <h2 className={className}>{props.children}</h2>}
        </>
    );
}
