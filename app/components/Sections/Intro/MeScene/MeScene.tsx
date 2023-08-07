"use client";

import MeCanvas from "@/app/components/Sections/Intro/MeScene/MeCanvas";
import { MotionValue, motion, useTransform, useInView } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { MotionCanvas } from "framer-motion-3d";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
    textContentHeight: number;
}

const DisableRender = () => useFrame(() => null, 1000);

export default function MeScene(props: MeSceneProps) {
    const windowHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    const { device } = useDeviceStore();
    const heightPercentage = Math.floor((props.textContentHeight * 100) / windowHeight);
    const spaceTop = device <= Device.sm ? heightPercentage - 32 : heightPercentage - 25;
    const y = useTransform(props.scrollYProgress, [0, 1], [`0lvh`, "90lvh"]);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    return (
        <>
            <div
                className={`h-full w-full overflow-hidden`}
                style={{ paddingTop: `${spaceTop}lvh` }}
                ref={ref}
            >
                <motion.div
                    className={`h-lvh w-full overflow-hidden`}
                    style={{ y }}
                >
                    <MotionCanvas
                        className={"[&>*]:touch-action-y"}
                        gl={{ antialias: false, alpha: true, precision: "lowp", powerPreference: "low-power" }}
                        frameloop={inView ? "always" : "never"}
                    >
                        <MeCanvas
                            scrollProgress={props.scrollYProgress}
                            isActive={inView}
                        />
                    </MotionCanvas>
                </motion.div>
            </div>
        </>
    );
}
