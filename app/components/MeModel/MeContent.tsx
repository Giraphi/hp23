import React, { Suspense, useEffect, useRef, useState } from "react";
import { AsciiRenderer, Sphere } from "@react-three/drei";
import { Group } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import ControlsSmall from "@/app/components/MeModel/ControlsSmall";
import { MotionValue } from "framer-motion";
import MeGltf from "@/app/components/MeModel/MeGltf";

export interface MeContentProps {
    scrollProgress: MotionValue<number>;
}

export default function MeContent(props: MeContentProps) {
    // const result = useGLTF("/models/me.glb") as GLTFResult;
    const rotateRef = useRef<Group>(null);
    const rotate2Ref = useRef<Group>(null);
    const { viewport } = useThree();
    // wait until controls are rendered. this way, the camera zoom is set before the mesh is visible and we don't get a flicker
    const [visible, setVisible] = useState(false);

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
                bgColor={"rgba(0,0,0,0)"}
                resolution={0.18}
                characters={" .:-+*=%@#FXQRI,?'`´"}
            />
            {/*fgColor={"rgba(255,0,255,1)"} // Color needs to be in exactly this format or AsciiRenderer throws an Error*/}

            <group
                scale={viewport.height / 6}
                visible={visible}
            >
                <group>
                    <ControlsSmall
                        scrollProgress={props.scrollProgress}
                        onReady={() => setVisible(true)}
                    />

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

                    <Suspense>
                        <MeGltf />
                    </Suspense>
                </group>
            </group>
        </>
    );
}
