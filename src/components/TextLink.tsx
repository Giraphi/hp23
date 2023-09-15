import { HTMLProps, ReactNode } from "react";
import { cn } from "@/src/util/functions";
import Link from "next/link";

export interface TextLinkProps {
    children: ReactNode;
    className?: string;
    href: string;
}

export default function TextLink(props: TextLinkProps) {
    return (
        <Link
            href={props.href}
            className={cn(
                props.className,
                "inline-flex flex-col font-bold after:flex after:h-0.5 after:rounded after:bg-white hover:text-lime-500 hover:after:bg-lime-500"
            )}
        >
            {props.children}
        </Link>
    );
}
