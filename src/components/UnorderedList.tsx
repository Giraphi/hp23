import { ReactNode } from "react";
import { cn } from "@/src/util/functions";

export interface UnorderedListProps {
    children: ReactNode;
    className?: string;
}

export default function UnorderedList(props: UnorderedListProps) {
    return <ul className={cn("list-disc pl-4 [&>li]:pb-2", props.className)}>{props.children}</ul>;
}
