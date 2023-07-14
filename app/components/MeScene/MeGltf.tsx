import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export interface MeGltfProps {}

useGLTF.preload("/models/me.glb");

export default function MeGltf(props: MeGltfProps) {
    const { nodes } = useGLTF("/models/me.glb") as GLTFResult;
    const device = useDeviceStore((state) => state.device);

    return (
        <>
            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                rotation={device < Device.lg ? [0.05, -0.1, 0.07] : [0.05, -0.4, 0.07]}
                position={device < Device.lg ? [-0.2, -0.6, 0] : [0, -0.6, 0]}
                scale={12}
            />
        </>
    );
}
