"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/MeScene/MeCanvas";
import styles from "./meScene.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

export interface MeSceneProps {}

export default function MeScene(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const hintOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    return (
        <>
            <div
                className={"relative h-full md:static"}
                ref={ref}
            >
                <div className={`sticky top-0 h-[100vh] w-full overflow-hidden md:static`}>
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas className={styles.canvasWrapper}>
                        <MeCanvas scrollProgress={scrollYProgress} />
                    </Canvas>
                    {/*<motion.div*/}
                    {/*    className={"absolute top-0 w-full bg-gray-2 p-1 text-center text-sm text-lime"}*/}
                    {/*    style={{ opacity: hintOpacity }}*/}
                    {/*>*/}
                    {/*    Swipe right/left to rotate*/}
                    {/*</motion.div>*/}
                </div>
            </div>
        </>
    );
}
