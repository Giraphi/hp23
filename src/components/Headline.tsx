import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface HeadlineProps {
    type?: "h1" | "h2";
    children: ReactNode;
    className?: string;
}

export default function Headline(props: HeadlineProps) {
    const className = twMerge("font-delaGothicOne text-4xl md:text-5xl xxl:text-7xl ", props.className);

    const type = props.type || "h2";

    return (
        <>
            {type === "h1" && <h1 className={className}>{props.children}</h1>}
            {type === "h2" && <h2 className={className}>{props.children}</h2>}
        </>
    );
}
