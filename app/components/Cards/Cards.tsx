import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface CardsProps {
    children?: ReactNode;
    className?: string;
}

export default function Cards(props: CardsProps) {
    return (
        <div className={twMerge(`flex flex-col items-center gap-4 md:gap-6 lg:flex-row lg:items-stretch lg:gap-8`, props.className)}>
            {props.children}
        </div>
    );
}
