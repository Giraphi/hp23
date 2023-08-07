import { Suspense, useEffect, useRef, useState } from "react";
import { AsciiRenderer, Sphere, PerspectiveCamera } from "@react-three/drei";
import { Group, PerspectiveCamera as PerspectiveCameraType } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import ControlsSmall from "@/app/components/Sections/Intro/MeScene/ControlsSmall";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import MeGltf from "@/app/components/Sections/Intro/MeScene/MeGltf";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import ControlsLarge from "@/app/components/Sections/Intro/MeScene/large/ControlsLarge";
import MeGltfLarge from "@/app/components/Sections/Intro/MeScene/large/MeGltfLarge";

export default function MeCanvasLarge() {
    const rotateRef = useRef<Group>(null);
    const rotate2Ref = useRef<Group>(null);
    const { viewport } = useThree();
    const [isHovered, setIsHovered] = useState(false);
    const cameraRef = useRef<PerspectiveCameraType>(null);

    useFrame((state, delta) => {
        rotateRef.current?.rotateY(delta * 2);
        rotate2Ref.current?.rotateY(delta * 1.2);
    });

    useEffect(() => {
        if (isHovered) {
            document.body.style.cursor = "grab";
            return () => void (document.body.style.cursor = "auto");
        }
    }, [isHovered]);

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

            {/*<PerspectiveCamera*/}
            {/*    ref={cameraRef}*/}
            {/*    makeDefault={true}*/}
            {/*    position={[0, 0.1, 2]}*/}
            {/*/>*/}
            {/*fgColor={"rgba(255,0,255,1)"} // Color needs to be in exactly this format or AsciiRenderer throws an Error*/}

            <group scale={viewport.height / 6}>
                <group>
                    <ControlsLarge
                        enabled={true}
                        cameraRef={cameraRef}
                    />

                    <group
                        position={[0, 0, 0]}
                        ref={rotateRef}
                    >
                        <Sphere
                            scale={0.1}
                            position={[1.4, 1, 0.7]}
                        >
                            <meshPhongMaterial
                                color="#fff"
                                opacity={0.6}
                                transparent
                            />
                        </Sphere>
                    </group>

                    <group
                        position={[0, 0, 0]}
                        ref={rotate2Ref}
                    >
                        <Sphere
                            scale={0.1}
                            position={[1.8, 0.5, -0.2]}
                        >
                            <meshPhongMaterial
                                color="#fff"
                                opacity={0.6}
                                transparent
                            />
                        </Sphere>
                    </group>

                    <spotLight
                        intensity={1}
                        color={"white"}
                        position={[3, 15, 9]}
                        castShadow={true}
                    />

                    <group
                        onPointerEnter={() => setIsHovered(true)}
                        onPointerLeave={() => setIsHovered(false)}
                    >
                        <Suspense>
                            <MeGltfLarge />
                        </Suspense>
                    </group>
                </group>
            </group>
        </>
    );
}
