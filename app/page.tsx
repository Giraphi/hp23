import React from "react";
import { GLTF } from "three-stdlib";
import MeModel from "@/app/components/MeModel/MeModel";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export default function Home() {
    return (
        <main className={"h-[100dvh] bg-gray-700"}>
            <div className={"absolute top-8 flex w-full justify-center text-center text-lg text-white"}>
                <h1>Drag / Scroll</h1>
            </div>
            <MeModel />
        </main>
    );
}
