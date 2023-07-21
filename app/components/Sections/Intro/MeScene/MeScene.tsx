"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/Sections/Intro/MeScene/MeCanvas";
import { MotionValue, motion, useTransform } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
    textContentHeight: number;
}

export default function MeScene(props: MeSceneProps) {
    const windowHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    const { device } = useDeviceStore();
    const start = device <= Device.sm ? props.textContentHeight - 0.35 * windowHeight : props.textContentHeight - 0.25 * windowHeight;
    const end = device <= Device.sm ? 1.2 * windowHeight : windowHeight;
    const y = useTransform(props.scrollYProgress, [0, 1], [start, end]);

    return (
        <>
            <div className={`h-full w-full overflow-hidden`}>
                <motion.div
                    className={`h-lvh w-full overflow-hidden`}
                    style={{ y }}
                >
                    <Canvas
                        className={"touch-action-y"}
                        frameloop="demand"
                    >
                        <MeCanvas scrollProgress={props.scrollYProgress} />
                    </Canvas>
                </motion.div>
            </div>
        </>
    );
}
