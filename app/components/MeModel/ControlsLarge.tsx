import React, { useEffect } from "react";
import { MotionValue } from "framer-motion";
import { CameraControls } from "@react-three/drei";

export interface ControlsLargeProps {
    scrollProgress?: MotionValue<number>;
    onReady: () => void;
}

export default function ControlsLarge(props: ControlsLargeProps) {
    const { onReady } = props;
    useEffect(() => {
        onReady();
    }, [onReady]);

    return (
        <>
            <CameraControls />
        </>
    );
}
