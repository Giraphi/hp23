import { useRef } from "react";
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

export interface MeGltfProps {
    progress: MotionValue<number>;
}

useGLTF.preload("/models/me.glb");

export default function MeGltf(props: MeGltfProps) {
    const { nodes } = useGLTF("/models/me.glb") as GLTFResult;
    const ref = useRef<Mesh>(null);
    const rotation = useTransform(props.progress, [0, 1], [-0.6, 0.4]);

    useFrame(() => {
        if (!ref.current) {
            return;
        }
        const rotationValue = rotation.get();
        // const target = initRotationY + rotationValue;

        ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, rotationValue, 0.1);
    });

    return (
        <>
            <mesh
                ref={ref}
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                rotation={[0.05, 0, 0.07]}
                position={[-0.2, -0.6, 0]}
                scale={12}
            />
        </>
    );
}
