import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { MotionValue, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Mesh } from "three";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

useGLTF.preload("/models/me.glb");

export default function MeGltfLarge() {
    const { nodes } = useGLTF("/models/me.glb") as GLTFResult;
    const ref = useRef<Mesh>(null);

    return (
        <>
            <mesh
                ref={ref}
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                rotation={[0.05, -0.4, 0.07]}
                position={[0, -0.6, 0]}
                scale={12}
            />
        </>
    );
}
