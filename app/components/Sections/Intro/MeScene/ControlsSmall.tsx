import React, { useEffect, useRef, useState } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue, useTransform } from "framer-motion";
import { ACTION } from "camera-controls/dist/types";

export interface ControlsSmallProps {
    scrollProgress: MotionValue<number>;
    onReady: () => void;
}

export default function ControlsSmall(props: ControlsSmallProps) {
    const controlsRef = useRef<any>(null);
    const zoom = useTransform(props.scrollProgress, [0, 0.1, 1], [0.18, 0.35, 3]);

    useFrame(() => {
        if (!controlsRef.current) {
            return;
        }

        controlsRef.current.zoomTo(zoom.get());
    });

    const { onReady } = props;
    useEffect(() => {
        onReady();
    }, [onReady]);

    return (
        <>
            <CameraControls
                mouseButtons={{ wheel: 0, left: 1, right: 1, middle: 0 }}
                ref={controlsRef}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                truckSpeed={0}
                azimuthRotateSpeed={2}
            />
        </>
    );
}
