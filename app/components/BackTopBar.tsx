"use client";

import React from "react";
import Grid from "@/app/components/Grid/Grid";
import ChevronDown from "@/app/assets/chevron-down.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackTopBar() {
    const router = useRouter();
    //
    // console.log(document.referrer);
    //
    // function handleClick() {
    //     router.back();
    // }
    // console.log(document.referrer);

    return (
        <nav className={"sticky top-0 z-30 flex h-10 bg-gray-1 md:h-12"}>
            <Grid>
                <div className={"col-content font-bold"}>
                    <Link
                        href={"/"}
                        replace
                        className={"inline-flex h-full items-center"}
                    >
                        <ChevronDown className={"mr-1 rotate-90"} />
                        Back to main page
                    </Link>
                </div>
            </Grid>
        </nav>
    );
}

export async function getServerSideProps(context: any) {
    console.log("SSP");
    console.log(context);
}
