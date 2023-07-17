import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
    href?: string;
    children: ReactNode;
    className?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <a
            href={props.href}
            className={twMerge(
                "inline-flex cursor-pointer rounded-lg bg-gray-1 px-8 py-2 font-bold uppercase md:px-16 md:py-4",
                props.className
            )}
        >
            {props.children}
        </a>
    );
}
