import { ReactNode } from "react";
import { cn } from "@/app/util/functions";

export interface SectionTextProps {
    children: ReactNode;
    className?: string;
}

export default function SectionText(props: SectionTextProps) {
    return <div className={cn("col-content pb-4 lg:pb-8 xl:col-text", props.className)}>{props.children}</div>;
}
