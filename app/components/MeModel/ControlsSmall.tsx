import React, { ReactNode, useRef } from "react";
import { CameraControls, CameraControlsProps, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls as OrbitControlsType } from "three-stdlib/controls/OrbitControls";
import { useScroll } from "framer-motion";

export interface ControlsSmallProps {}

export default function ControlsSmall(props: ControlsSmallProps) {
    const controlsRef = useRef<any>(null);
    const isResetting = useRef<boolean>(false);
    const scrollY = useScroll();

    return (
        <>
            <CameraControls
                ref={controlsRef}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                truckSpeed={0}
                azimuthRotateSpeed={2}
            />
        </>
    );
}
