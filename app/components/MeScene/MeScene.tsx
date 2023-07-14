"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/MeScene/MeCanvas";
import styles from "./meScene.module.scss";
import { MotionValue, useScroll } from "framer-motion";
import { useDeviceStore } from "@/app/store/useDeviceStore";

export interface MeSceneProps {
    scrollYProgress?: MotionValue<number>;
}

export default function MeScene(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const device = useDeviceStore((state) => state.device);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                {/* re-mount the whole canvas. Otherwise we'd have to manually reset all zoom/rotates etc. */}
                <div
                    className={`sticky top-0 h-[100vh] w-full overflow-hidden lg:static`}
                    key={device}
                >
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas className={styles.canvasWrapper}>
                        <MeCanvas scrollProgress={scrollYProgress} />
                    </Canvas>
                </div>
            </div>
        </>
    );
}
