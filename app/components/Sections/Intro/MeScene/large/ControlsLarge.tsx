import React, { RefObject, useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { usePointerStore } from "@/app/store/usePointerStore";
import { useFrame, useThree } from "@react-three/fiber";
import useCursorObject from "@/app/hooks/useCursorObject";
import { PerspectiveCamera } from "three";

export interface ControlsLargeProps {
    enabled: boolean;
    cameraRef: RefObject<PerspectiveCamera>;
}

export default function ControlsLarge(props: ControlsLargeProps) {
    const controlsRef = useRef<any>(null);
    const mousePositionRef = useRef(usePointerStore.getState().mousePosition);
    useEffect(() => usePointerStore.subscribe((state) => (mousePositionRef.current = state.mousePosition)), []);

    function handleEnd() {
        if (!controlsRef.current) {
            return;
        }

        controlsRef.current.reset(true);
    }

    return (
        <>
            <CameraControls
                mouseButtons={{ wheel: 0, left: 1, right: 1, middle: 0 }}
                ref={controlsRef}
                enabled={props.enabled}
                onEnd={handleEnd}
            />
        </>
    );
}
