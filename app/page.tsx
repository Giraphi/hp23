"use client";

import React, { useRef } from "react";
import { GLTF } from "three-stdlib";
// import Cover from "@/app/components/CodeExamples/Cover/Cover";
// import Grid from "@/app/components/Grid/Grid";
import Intro from "@/app/components/Sections/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import Headline from "@/app/components/Headline";
import { useScroll } from "framer-motion";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);
    useDeviceStoreHandler();
    // const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

    return (
        <main>
            {/*<Puzzle />*/}
            {/*<DotsRow />*/}
            {/*<Cover />*/}

            <div className={"sticky top-[-300lvh] lg:static"}>
                <Intro />
            </div>

            {/*<div*/}
            {/*    className={"sticky top-[-400lvh] h-[400vh] lg:hidden"}*/}
            {/*    ref={ref}*/}
            {/*></div>*/}

            <div className={"relative h-[100vh] border-t-2 border-pink bg-gradient-to-b from-gray-2 to-gray-1 lg:static lg:border-none"}>
                <Headline className={"pt-8"}>Next Section</Headline>
            </div>
        </main>
    );
}
