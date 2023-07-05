"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer, OrbitControls, Sphere, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group, Vector3 } from "three";
import MeContent from "@/app/components/MeModel/MeContent";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export interface MeModelProps {}

export default function MeModel(props: MeModelProps) {
    return (
        <Canvas style={{ height: "100%" }}>
            <MeContent />
        </Canvas>
    );
}
