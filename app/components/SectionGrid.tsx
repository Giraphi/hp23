import React, { ReactNode } from "react";
import Grid from "@/app/components/Grid/Grid";

export interface SectionGridProps {
    children: ReactNode;
}

export default function SectionGrid(props: SectionGridProps) {
    return <Grid className={"pb-12 pt-8 lg:pb-32"}>{props.children}</Grid>;
}
