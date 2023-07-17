import React, { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";

export interface ControlsLargeProps {
    enabled: boolean;
}

export default function ControlsLarge(props: ControlsLargeProps) {
    const controlsRef = useRef<any>(null);

    return (
        <>
            <CameraControls
                mouseButtons={{ wheel: 0, left: 1, right: 1, middle: 0 }}
                ref={controlsRef}
                enabled={props.enabled}
            />
        </>
    );
}
