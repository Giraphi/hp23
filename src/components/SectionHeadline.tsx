import { ReactNode } from "react";
import Headline from "@/components/Headline";
import { cn } from "@/util/functions";

export interface SectionHeadlineProps {
    children: ReactNode;
    className?: string;
}

export default function SectionHeadline(props: SectionHeadlineProps) {
    return (
        <Headline
            type={"h2"}
            className={cn("pb-4 lg:pb-8", props.className)}
        >
            {props.children}
        </Headline>
    );
}
