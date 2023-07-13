import React, { ReactNode } from "react";

export interface ButtonProps {
    href?: string;
    children: ReactNode;
}

export default function Button(props: ButtonProps) {
    return (
        <a
            href={props.href}
            className={"inline-flex cursor-pointer rounded-lg bg-gray-1 px-16 py-4 text-2xl font-bold uppercase"}
        >
            {props.children}
        </a>
    );
}
