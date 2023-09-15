"use client";

import { ReactNode, useRef } from "react";
import SectionBackground from "@/src/components/SectionBackground";
import WavesAnimation from "@/src/app/components/AboutMe/WavesBackground/WavesAnimation";
import { motion, useInView } from "framer-motion";
import { Device, useDeviceStore } from "@/src/store/useDeviceStore";

export interface WavesBackgroundProps {
    children: ReactNode;
}

const variants = {
    visible: {
        opacity: 1,
        transition: { ease: "easeIn", duration: 2 },
    },
    hidden: {
        opacity: 0,
        transition: { ease: "easeOut", duration: 1 },
    },
};

export default function WavesBackground(props: WavesBackgroundProps) {
    const ref = useRef(null);
    const { device } = useDeviceStore();
    const small = device <= Device.md;
    const inView = useInView(ref, small ? { margin: "-50% 0% -20% 0%" } : { margin: "0% 0% -40% 0%" });

    return (
        <SectionBackground
            className={"grid w-full grid-cols-1"}
            ref={ref}
        >
            <div className={"pointer-events-none col-start-1 row-start-1 h-full w-full"}>
                <motion.div
                    className={"fixed left-[10%] top-0 z-10 h-lvh w-full"}
                    variants={variants}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                >
                    <WavesAnimation />
                </motion.div>
            </div>
            <div className={"col-start-1 row-start-1 w-full"}>{props.children}</div>
        </SectionBackground>
    );
}
