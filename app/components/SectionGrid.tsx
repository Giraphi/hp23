import React, { ReactNode } from "react";
import Grid from "@/app/components/Grid/Grid";

export interface SectionGridProps {
    children: ReactNode;
}

export default function SectionGrid(props: SectionGridProps) {
    return <Grid className={"pb-12 pt-4 lg:pb-32 lg:pt-8"}>{props.children}</Grid>;
}
