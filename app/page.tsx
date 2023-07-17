"use client";

import React, { useRef } from "react";
import { GLTF } from "three-stdlib";
// import Cover from "@/app/components/CodeExamples/Cover/Cover";
// import Grid from "@/app/components/Grid/Grid";
import Intro from "@/app/components/Sections/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import Headline from "@/app/components/Headline";
import { useScroll } from "framer-motion";

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    useDeviceStoreHandler();
    // const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

    return (
        <main>
            {/*<Puzzle />*/}
            {/*<DotsRow />*/}
            {/*<Cover />*/}

            {/* start to float when top edge is 200vh above viewport. Since Intro has a height of 300vh this is
            exactly when bottom edge meets bottom of viewport
            Can't use bottom:0 here, because that makes element float as long as bottom edge is below viewport.
            */}
            <div className={"sticky top-[-200lvh] lg:static"}>
                <Intro />
            </div>

            {/*<div*/}
            {/*    className={"sticky top-[-400lvh] h-[400vh] lg:hidden"}*/}
            {/*    ref={ref}*/}
            {/*></div>*/}

            <div className={"relative h-[100vh] border-t-2 border-gray-4 bg-gradient-to-b from-gray-2 to-gray-1 lg:static lg:border-none"}>
                <Headline className={"pt-8"}>Next Section</Headline>
            </div>
        </main>
    );
}
