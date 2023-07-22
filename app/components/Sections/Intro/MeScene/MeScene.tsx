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
    const heightPercentage = Math.floor((props.textContentHeight * 100) / windowHeight);
    const spaceTop = device <= Device.sm ? heightPercentage - 35 : heightPercentage - 25;

    const y = useTransform(props.scrollYProgress, [0, 1], [`0lvh`, `80lvh`]);

    return (
        <>
            <div
                className={`h-full w-full overflow-hidden`}
                style={{ paddingTop: `${spaceTop}lvh` }}
            >
                <motion.div
                    className={`h-lvh w-full overflow-hidden`}
                    style={{ y }}
                >
                    <Canvas
                        className={"touch-action-y"}
                        gl={{ antialias: false, alpha: true, precision: "lowp", powerPreference: "low-power" }}
                    >
                        <MeCanvas scrollProgress={props.scrollYProgress} />
                    </Canvas>
                </motion.div>
            </div>
        </>
    );
}
