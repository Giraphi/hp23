import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
// import * as THREE from "three";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { MotionValue, useTransform } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import useCursorObject from "@/app/hooks/useCursorObject";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: Mesh;
    };
    materials: {};
};

useGLTF.preload("/models/me.glb");

export interface MeGltfLargeProps {
    isActive: boolean;
}

export default function MeGltfLarge(props: MeGltfLargeProps) {
    const { nodes } = useGLTF("/models/me.glb") as GLTFResult;
    const groupRef = useRef<Group>(null);
    useCursorObject(groupRef, props.isActive);

    return (
        <>
            <group ref={groupRef}>
                <mesh
                    geometry={nodes.mesh_0.geometry}
                    material={nodes.mesh_0.material}
                    rotation={[0.05, -0.2, 0.07]}
                    position={[0, -0.6, 0]}
                    scale={12}
                />
            </group>
        </>
    );
}
