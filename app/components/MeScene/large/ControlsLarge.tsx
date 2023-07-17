import React, { useEffect, useRef } from "react";
import { MotionValue } from "framer-motion";
import { CameraControls } from "@react-three/drei";

export interface ControlsLargeProps {
    onReady: () => void;
    enabled: boolean;
}

export default function ControlsLarge(props: ControlsLargeProps) {
    const controlsRef = useRef<any>(null);

    const { onReady } = props;
    useEffect(() => {
        onReady();
    }, [onReady]);

    useEffect(() => {
        if (controlsRef.current) controlsRef.current.reset();
    });

    return (
        <>
            <CameraControls
                ref={controlsRef}
                enabled={props.enabled}
            />
        </>
    );
}
