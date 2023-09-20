import Grid from "@/src/components/Grid/Grid";
import Link from "next/link";
import ChevronDown from "@/src/assets/chevron-down.svg";
import React from "react";
import MenuIcon from "@/src/components/MenuIcon";

export interface OverlayTopBarProps {
    title?: string;
}

export default function OverlayTopBar(props: OverlayTopBarProps) {
    return (
        <>
            <div className={"sticky top-0 z-30 flex h-10 bg-gray-1 md:hidden md:h-12"}>
                <Grid>
                    <div className={"col-content row-start-1 flex items-center justify-center"}>
                        <span className={"font-delaGothicOne text-pink-600"}>{props.title}</span>
                    </div>
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

            <div className={"sticky right-0 top-0 flex h-12 justify-end"}>
                <Link
                    href={`/`}
                    className={"h-full w-12 rounded-bl-md bg-black"}
                >
                    <MenuIcon isCross={true} />
                </Link>
            </div>
        </>
    );
}
