import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionParagraphProps {
    children: ReactNode;
    disableSpace?: boolean;
    className?: string;
}

export default function SectionParagraph(props: SectionParagraphProps) {
    return <p className={twMerge(`${props.disableSpace ? "" : "pb-4"}`, props.className)}>{props.children}</p>;
}
