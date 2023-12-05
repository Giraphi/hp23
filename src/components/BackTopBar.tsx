import React from "react";
import Grid from "@/components/Grid/Grid";
import ChevronDown from "@/assets/chevron-down.svg";
import Link from "next/link";
import { SectionId } from "@/store/useActiveSectionStore";

export interface BackTopBarProps {
    title?: string;
}

export default function BackTopBar(props: BackTopBarProps) {
    return (
        <nav className={"sticky top-0 z-30 flex h-10 bg-neutral-950 md:h-12"}>
            <Grid>
                <div className={"col-content row-start-1 flex items-center justify-center"}>
                    <span className={"font-delaGothicOne text-pink-600"}>{props.title}</span>
                </div>
                <div className={"col-content row-start-1 font-bold"}>
                    <Link
                        href={`/#${SectionId.codeExamples}`}
                        scroll={true}
                        className={"inline-flex h-full items-center"}
                    >
                        <ChevronDown className={"mr-1 rotate-90"} />
                        Back
                    </Link>
                </div>
            </Grid>
        </nav>
    );
}
