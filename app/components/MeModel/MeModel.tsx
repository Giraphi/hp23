"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeContent from "@/app/components/MeModel/MeContent";
import styles from "./meModel.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

export interface MeModelProps {}

export default function MeModel(props: MeModelProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 35%", "end start"] });
    const hintOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    return (
        <>
            <div
                className={"relative h-full"}
                ref={ref}
            >
                <div className={`sticky top-0 h-[100vh] w-full overflow-hidden`}>
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas className={styles.canvasWrapper}>
                        <MeContent scrollProgress={scrollYProgress} />
                    </Canvas>
                    <motion.div
                        className={"absolute bottom-0 w-full bg-gray-2 p-1 text-center text-sm text-lime"}
                        style={{ opacity: hintOpacity }}
                    >
                        Swipe right/left to rotate
                    </motion.div>
                </div>
            </div>
        </>
    );
}
