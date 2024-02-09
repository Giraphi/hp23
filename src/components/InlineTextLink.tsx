import { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import GlitchText from "./GlitchText/GlitchText";

export interface TextLinkProps extends HTMLProps<HTMLAnchorElement> {
    children: string;
    inverse?: boolean;
}

export default function InlineTextLink(props: TextLinkProps) {
    const { children, className, ...rest } = props;
    return (
        <a
            {...rest}
            className={twMerge(className, `${!props.inverse ? "text-lime-500 hover:text-lime-600" : "text-lime-600 hover:text-lime-500"}`)}
        >
            {props.children}
        </a>
    );
}
