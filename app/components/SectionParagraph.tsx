import React, { ReactNode } from "react";

export interface SectionParagraphProps {
    children: ReactNode;
}

export default function SectionParagraph(props: SectionParagraphProps) {
    return <p className={"pb-4"}>{props.children}</p>;
}
