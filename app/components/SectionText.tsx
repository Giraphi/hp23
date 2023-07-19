import React, { ReactNode } from "react";

export interface SectionTextProps {
    children: ReactNode;
}

export default function SectionText(props: SectionTextProps) {
    return <div className={"col-content pb-4 lg:pb-8 xl:col-text"}>{props.children}</div>;
}
