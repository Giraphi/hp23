"use client";

import React from "react";
import { GLTF } from "three-stdlib";
// import Cover from "@/app/components/CodeExamples/Cover/Cover";
// import Grid from "@/app/components/Grid/Grid";
import Intro from "@/app/components/Sections/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";

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
            {/*<div className={"absolute top-8 flex w-full justify-center text-center text-lg text-white"}>*/}
            {/*    <h1>Drag / Scroll</h1>*/}
            {/*</div>*/}
            {/*<MeModel />*/}
            {/*<Puzzle />*/}
            {/*<DotsRow />*/}

            {/*<Cover />*/}
            <Intro />
        </main>
    );
}
