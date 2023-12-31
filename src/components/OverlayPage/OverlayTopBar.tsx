import Grid from "@/components/Grid/Grid";
import Link from "next/link";
import ChevronDown from "@/assets/chevron-down.svg";
import React from "react";
import MenuIcon from "@/components/MenuIcon";

export interface OverlayTopBarProps {
    title?: string;
}

export default function OverlayTopBar(props: OverlayTopBarProps) {
    return (
        <>
            <div className={"sticky top-0 z-30 flex h-10 w-full bg-neutral-950 md:hidden md:h-12"}>
                <Grid>
                    <div className={"col-content row-start-1 font-bold"}>
                        <Link
                            href={`/`}
                            className={"inline-flex h-full items-center"}
                        >
                            <ChevronDown className={"mr-1 rotate-90"} />
                            Back
                        </Link>
                    </div>
                </Grid>
            </div>

            <div className={"sticky right-0 top-0 z-30 hidden h-12 justify-end md:flex"}>
                <Link
                    href={`/`}
                    className={"h-full w-12 rounded-bl-md bg-neutral-950"}
                >
                    <MenuIcon isCross={true} />
                </Link>
            </div>
        </>
    );
}
