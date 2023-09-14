import { ReactNode } from "react";
import Grid from "@/src/components/Grid/Grid";
import { twMerge } from "tailwind-merge";

export interface SectionGridProps {
    children: ReactNode;
    className?: string;
}

export default function SectionGrid(props: SectionGridProps) {
    return <Grid className={twMerge("relative z-20 pb-8 pt-8 lg:pb-28", props.className)}>{props.children}</Grid>;
}
