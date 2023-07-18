"use client";

import React, { useRef } from "react";
import Intro from "@/app/components/Sections/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import Headline from "@/app/components/Headline";
import usePointerStoreHandler from "@/app/store/usePointerStoreHandler";
import Grid from "@/app/components/Grid/Grid";

export default function Home() {
    useDeviceStoreHandler();
    usePointerStoreHandler();

    return (
        <main>
            {/*<Puzzle />*/}
            {/*<DotsRow />*/}
            {/*<Cover />*/}

            {/* start to float when top edge is 200vh above viewport. Since Intro has a height of 300vh this is
            exactly when bottom edge meets bottom of viewport
            Can't use bottom:0 here, because that makes element float as long as bottom edge is below viewport.
            */}
            <Intro />

            <div className={"relative h-[100vh] border-t-2 border-gray-4 bg-gradient-to-b from-gray-2 to-gray-1 lg:static lg:border-none"}>
                <Grid>
                    <div className={"col-content"}>
                        <Headline className={"pt-8"}>Next Section</Headline>
                    </div>
                </Grid>
            </div>
        </main>
    );
}
