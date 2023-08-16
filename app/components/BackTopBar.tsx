import React from "react";
import Grid from "@/app/components/Grid/Grid";
import ChevronDown from "@/app/assets/chevron-down.svg";

export interface BackTopBarProps {}

export default function BackTopBar(props: BackTopBarProps) {
    return (
        <nav className={"sticky top-0 z-30 flex h-10 bg-gray-1 md:h-12"}>
            <Grid>
                <div className={"col-content font-bold"}>
                    <a
                        href={"/"}
                        className={"inline-flex h-full items-center"}
                    >
                        <ChevronDown className={"mr-1 rotate-90"} />
                        Back
                    </a>
                </div>
            </Grid>
        </nav>
    );
}
