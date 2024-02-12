import React, { FC, ReactNode } from "react";
import { cn } from "@/util/functions";
import Link from "next/link";
import GlitchText from "./GlitchText/GlitchText";

export interface IconButtonProps {
    href?: string;
    children: ReactNode;
    className?: string;
    Icon?: FC<{ className?: string }>;
    target?: string;
}

export default function IconButton(props: IconButtonProps) {
    const { Icon } = props;

    return (
        <Link
            href={props.href || ""}
            className={cn(
                "glitchTextParent inline-flex cursor-pointer items-center rounded-lg bg-neutral-950 px-3 py-2 font-bold text-white hover:text-lime-500",
                props.className
            )}
            target={props.target}
        >
            <GlitchText>
                <span className="flex items-center">
                    {Icon && <Icon className={"mr-2 h-6 w-6"} />}
                    {props.children}
                </span>
            </GlitchText>
        </Link>
    );
}
