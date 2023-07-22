"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/Sections/Intro/MeScene/MeCanvas";
import { MotionValue, motion, useTransform, useScroll } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
    textContentHeight: number;
}

export default function MeScene(props: MeSceneProps) {
    const windowHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    const { device } = useDeviceStore();
    const heightPercentage = props.textContentHeight / windowHeight;
    const start = device <= Device.sm ? heightPercentage - 0.35 : heightPercentage - 0.25;
    const end = 1.3;

    const y = useTransform(props.scrollYProgress, [0, 1], [`200px`, `600px`]);

    return (
        <>
            <div className={`h-full w-full overflow-hidden`}>
                <motion.div
                    className={`h-lvh w-full overflow-hidden`}
                    style={{ y }}
                >
                    <Canvas className={"touch-action-y"}>
                        <MeCanvas scrollProgress={props.scrollYProgress} />
                    </Canvas>
                </motion.div>
            </div>
        </>
    );
}
