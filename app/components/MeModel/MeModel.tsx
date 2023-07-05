"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { AsciiRenderer, OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export interface MeModelProps {}

export default function MeModel(props: MeModelProps) {
    const { nodes } = useGLTF("/models/me.glb") as GLTFResult;

    return (
        <Canvas style={{ height: "100%" }}>
            <AsciiRenderer
                invert={false}
                bgColor={"transparent"}
                resolution={0.2}
            />

            <OrbitControls />
            {/*<pointLight*/}
            {/*    intensity={0.5}*/}
            {/*    color={"white"}*/}
            {/*    position={[0, 20, 10]}*/}
            {/*    castShadow={true}*/}
            {/*/>*/}

            <spotLight
                intensity={10}
                color={"white"}
                position={[5, 25, 10]}
                castShadow={true}
            />

            {/*<ambientLight intensity={0.1} />*/}
            {/*<pointLight*/}
            {/*    distance={1000}*/}
            {/*    decay={0.1}*/}
            {/*    castShadow={true}*/}
            {/*    intensity={0.6}*/}
            {/*    color={"white"}*/}
            {/*    position={[3, 2, 3]}*/}
            {/*/>*/}

            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                rotation={[-0.1, 0.08, 0.07]}
                scale={8.62}
            />
        </Canvas>
    );
}
