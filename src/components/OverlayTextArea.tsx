import { ReactNode } from "react";

export interface OverlayTextProps {
    children: ReactNode;
}

export default function OverlayTextArea(props: OverlayTextProps) {
    return <div className={"col-start-2 col-end-6 pb-4 md:col-end-8 lg:col-start-3 lg:col-end-[13] lg:pb-8 "}>{props.children}</div>;
}
