import React, { ReactNode } from "react";

export interface ButtonProps {
    href?: string;
    children: ReactNode;
}

export default function Button(props: ButtonProps) {
    return (
        <a
            href={props.href}
            className={
                "inline-flex cursor-pointer rounded-lg bg-gray-1 px-8 py-2 text-base font-bold uppercase md:px-16 md:py-4 md:text-2xl"
            }
        >
            {props.children}
        </a>
    );
}
