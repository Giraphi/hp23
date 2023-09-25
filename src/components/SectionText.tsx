import { ReactNode } from "react";
import { cn } from "@/src/util/functions";

export interface SectionTextProps {
    children: ReactNode;
    className?: string;
}

export default function SectionText(props: SectionTextProps) {
    return <div className={cn("col-content pb-4 lg:pb-8 xxl:col-text", props.className)}>{props.children}</div>;
}
