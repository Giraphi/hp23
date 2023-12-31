import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MotionValue, useTransform } from "framer-motion";

export interface ControlsSmallProps {
    scrollProgress: MotionValue<number>;
    onReady: () => void;
}

export default function ControlsSmall(props: ControlsSmallProps) {
    const controlsRef = useRef<any>(null);
    const zoom = useTransform(props.scrollProgress, [0, 0.3, 1], [0.18, 0.8, 2.8]);
    const isFirstFrame = useRef(true);
    const zoomTarget = useRef(0.18);

    const { onReady } = props;

    // useFrame(() => {
    //     const zoomValue = zoom.get();
    //     //
    //     if (isFirstFrame.current) {
    //         controlsRef.current?.zoomTo(zoomValue);
    //         isFirstFrame.current = false;
    //         onReady();
    //         return;
    //     }
    //     //
    //     // // Avoid calling zoomTo too often, instead rely on transition between calls.
    //     // // This improved performance.
    //     if (Math.abs(zoomValue - zoomTarget.current) < 0.01) {
    //         return;
    //     }
    //     zoomTarget.current = zoomValue;
    //     controlsRef.current?.zoomTo(zoomValue, true);
    // });

    useFrame(() => {
        const zoomValue = zoom.get();
        //
        controlsRef.current?.zoomTo(zoomValue);
        if (isFirstFrame.current) {
            isFirstFrame.current = false;
            onReady();
            return;
        }

        controlsRef.current?.zoomTo(zoomValue);
    });

    return (
        <>
            <CameraControls
                touches={{ one: 32, two: 0, three: 0 }}
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
