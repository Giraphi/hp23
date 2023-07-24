import React, { ReactNode, useRef, useState } from "react";
import SectionBackground from "@/app/components/SectionBackground";
import WavesAnimation from "@/app/components/Sections/AboutMe/WavesBackground/WavesAnimation";
import { useScroll, useTransform, motion, useSpring, useMotionValueEvent } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface WavesBackgroundProps {
    children: ReactNode;
}

export default function WavesBackground(props: WavesBackgroundProps) {
    const ref = useRef(null);
    const { device } = useDeviceStore();
    const small = device <= Device.md;
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: small ? ["start end", "start start"] : ["start center", "end center"],
    });
    const progressSmooth = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const x = useTransform(progressSmooth, [0, 0.5, 1], small ? ["70%", "0%", "0%"] : ["40%", "0%", "0%"]);
    const [isHidden, setIsHidden] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const shouldHide = v === 0;
        setIsHidden(shouldHide);
    });

    return (
        <SectionBackground
            className={"grid w-full grid-cols-1"}
            ref={ref}
        >
            {!isHidden && (
                <div className={"col-start-1 row-start-1 h-full w-full"}>
                    <motion.div
                        className={"fixed left-0 top-0 z-10 h-lvh w-full"}
                        style={{ x }}
                    >
                        <WavesAnimation />
                    </motion.div>
                </div>
            )}
            <div className={"col-start-1 row-start-1 w-full"}>{props.children}</div>
        </SectionBackground>
    );
}
