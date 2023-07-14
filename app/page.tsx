"use client";

import React from "react";
import { GLTF } from "three-stdlib";
// import Cover from "@/app/components/CodeExamples/Cover/Cover";
// import Grid from "@/app/components/Grid/Grid";
import Intro from "@/app/components/Sections/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import Headline from "@/app/components/Headline";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export default function Home() {
    useDeviceStoreHandler();

    return (
        <main>
            {/*<Puzzle />*/}
            {/*<DotsRow />*/}
            {/*<Cover />*/}

            <div className={"sticky top-[-300lvh] lg:static"}>
                <Intro />
                {/*<div className={"h-[200vh] bg-gradient-to-b from-lime to-pink"}>hello</div>*/}
            </div>

            <div className={"relative h-[100vh] border-t-2 border-pink bg-gradient-to-b from-gray-2 to-gray-1 lg:static lg:border-none"}>
                <Headline className={"pt-8"}>Next Section</Headline>
            </div>
        </main>
    );
}
