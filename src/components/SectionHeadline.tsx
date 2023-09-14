import { ReactNode } from "react";
import Headline from "@/src/components/Headline";

export interface SectionHeadlineProps {
    children: ReactNode;
}

export default function SectionHeadline(props: SectionHeadlineProps) {
    return (
        <Headline
            type={"h2"}
            className={"pb-4 lg:pb-8"}
        >
            {props.children}
        </Headline>
    );
}
