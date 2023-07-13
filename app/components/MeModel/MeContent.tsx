import React, { useRef } from "react";
import { AsciiRenderer, Box, OrbitControls, Sphere, useGLTF } from "@react-three/drei";
import { Group, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
    };
    materials: {};
};

export interface MeContentProps {}

export default function MeContent(props: MeContentProps) {
    const { nodes } = useGLTF("/models/me.glb") as GLTFResult;
    const rotateRef = useRef<Group>(null);
    const rotate2Ref = useRef<Group>(null);
    const { viewport } = useThree();

    useFrame((state, delta) => {
        rotateRef.current?.rotateY(delta * 2);
        rotate2Ref.current?.rotateY(delta * 1.2);
    });

    return (
        <>
            <color
                attach="background"
                args={["black"]}
            />

            <AsciiRenderer
                invert={true}
                bgColor={"transparent"}
                resolution={0.18}
                characters={" .:-+*=%@#FXQRI,?'`´"}
            />
            {/*fgColor={"rgba(255,0,255,1)"} // Color needs to be in exactly this format or AsciiRenderer throws an Error*/}

            <group scale={viewport.height / 6}>
                <group>
                    <OrbitControls />

                    <group
                        position={[0, 0, 0]}
                        ref={rotateRef}
                    >
                        <Sphere
                            scale={0.1}
                            position={[1.4, 1, 0.7]}
                        />
                    </group>

                    <group
                        position={[0, 0, 0]}
                        ref={rotate2Ref}
                    >
                        <Sphere
                            scale={0.1}
                            position={[1.8, 0.5, -0.2]}
                        />
                    </group>

                    <spotLight
                        intensity={1}
                        color={"white"}
                        position={[3, 15, 9]}
                        castShadow={true}
                    />

                    <mesh
                        geometry={nodes.mesh_0.geometry}
                        material={nodes.mesh_0.material}
                        rotation={[0.05, -0.4, 0.07]}
                        position={[0, -0.6, 0]}
                        scale={12}
                    />
                </group>
            </group>
        </>
    );
}
