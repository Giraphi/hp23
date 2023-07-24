import React, { ReactNode } from "react";
import Grid from "@/app/components/Grid/Grid";
import { twMerge } from "tailwind-merge";

export interface SectionGridProps {
    children: ReactNode;
    className?: string;
}

export default function SectionGrid(props: SectionGridProps) {
    return <Grid className={twMerge("pb-12 pt-8 lg:pb-32", props.className)}>{props.children}</Grid>;
}
