import { FC, ReactNode } from "react";
import { cn } from "@/util/functions";

export interface ButtonProps {
    href?: string;
    target?: string;
    children: ReactNode;
    className?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <a
            target={props.target}
            href={props.href}
            className={cn(
                "inline-flex cursor-pointer items-center rounded-lg bg-neutral-950 px-8 py-2  text-white hover:text-lime-500 md:px-8 md:py-4",
                props.className
            )}
        >
            {props.children}
        </a>
    );
}
