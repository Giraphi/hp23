import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface TextLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
    inverse?: boolean;
}

export default function TextLink(props: TextLinkProps) {
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
