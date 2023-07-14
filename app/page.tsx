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

            <div className={"sticky top-0"}>
                <Intro />
            </div>
            <div className={"relative h-screen bg-gradient-to-b from-gray-3 to-gray-2"}>
                <Headline className={"pt-8"}>Site continues here</Headline>
            </div>
        </main>
    );
}
