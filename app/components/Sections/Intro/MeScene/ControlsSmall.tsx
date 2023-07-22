import React, { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

export interface ControlsSmallProps {
    scrollProgress: MotionValue<number>;
    onReady: () => void;
}

export default function ControlsSmall(props: ControlsSmallProps) {
    const controlsRef = useRef<any>(null);
    const zoom = useTransform(props.scrollProgress, [0, 0.1, 1], [0.18, 0.35, 3]);

    useFrame(() => {
        const target = zoom.get();
        const current = controlsRef.current._zoom;

        if (Math.abs(target - current) < 0.05) {
            return;
        }

        controlsRef.current?.zoomTo(target, true);
    });

    // useMotionValueEvent(zoom, "change", (value) => {
    //     controlsRef.current?.zoomTo(value);
    // });

    const { onReady } = props;
    useEffect(() => {
        onReady();
    }, [onReady]);

    return (
        <>
            <CameraControls
                touches={{ one: 32, two: 0, three: 0 }}
                smoothTime={0.15}
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
