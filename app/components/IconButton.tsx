import React, { FC, ReactNode } from "react";
import { cn } from "@/app/util/functions";

export interface IconButtonProps {
    href?: string;
    children: ReactNode;
    className?: string;
    Icon?: FC<{ className?: string }>;
}

export default function IconButton(props: IconButtonProps) {
    const { Icon } = props;

    return (
        <a
            href={props.href}
            className={cn(
                "inline-flex cursor-pointer items-center rounded-lg bg-gray-1 px-3 py-2 font-bold text-white hover:text-lime-500 ",
                props.className
            )}
        >
            {Icon && <Icon className={"mr-2 h-6 w-6"} />}
            {props.children}
        </a>
    );
}
