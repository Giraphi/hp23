"use client";

import React, { useEffect, useRef, useState } from "react";
import MeCanvas from "@/app/components/Sections/Intro/MeScene/MeCanvas";
import { MotionValue, motion, useTransform, useMotionValueEvent, MotionConfig } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { MotionCanvas } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";
import { current } from "immer";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
    textContentHeight: number;
}

export default function MeScene(props: MeSceneProps) {
    const windowHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    const { device } = useDeviceStore();
    const heightPercentage = Math.floor((props.textContentHeight * 100) / windowHeight);
    const spaceTop = device <= Device.sm ? heightPercentage - 32 : heightPercentage - 25;
    const y = useTransform(props.scrollYProgress, [0, 1], [`0lvh`, "90lvh"]);
    const [size, setSize] = useState("");
    const timeout = useRef<NodeJS.Timeout>();

    // Workaround to make MotionCanvas adjust to new window sizes.
    // The MotionCanvas component seems to set the dimensions only once at mount:
    // https://github.com/framer/motion/blob/34b97c7be35a6774f675fb8f1e17f161fa848cc9/packages/framer-motion-3d/src/components/MotionCanvas.tsx
    useEffect(() => {
        function handleResize() {
            if (!!timeout.current) clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
                setSize(`${window.innerHeight}${window.innerWidth}`);
            }, 100);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                    <MotionCanvas
                        key={size}
                        className={"[&>*]:touch-action-y"}
                        gl={{ antialias: false, alpha: true, precision: "lowp", powerPreference: "low-power" }}
                    >
                        <MeCanvas scrollProgress={props.scrollYProgress} />
                    </MotionCanvas>
                </motion.div>
            </div>
        </>
    );
}
