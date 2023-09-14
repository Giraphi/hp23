import React, { ReactNode } from "react";

export interface InlineCodeProps {
    children: ReactNode;
    href?: string;
}

export default function InlineCode(props: InlineCodeProps) {
    return (
        <a
            target={"_blank"}
            href={props.href}
            className={"whitespace-nowrap rounded bg-gray-c pl-1 pr-1 text-black"}
        >
            {props.children}
        </a>
    );
}
