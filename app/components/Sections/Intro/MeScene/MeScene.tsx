"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/Sections/Intro/MeScene/MeCanvas";
import { MotionValue, motion, useTransform } from "framer-motion";
import Grid from "@/app/components/Grid/Grid";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
}

export default function MeScene(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);
    const opacity = useTransform(props.scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                <div className={`sticky top-0 h-lvh w-full overflow-hidden`}>
                    <Canvas className={"touch-action-y"}>
                        <MeCanvas scrollProgress={props.scrollYProgress} />
                    </Canvas>

                    <Grid className={"absolute bottom-[10vh]"}>
                        <motion.p
                            style={{ opacity }}
                            className={"col-span-2 col-start-3 text-center md:col-start-4"}
                        >
                            ... and I always love challenges :)
                        </motion.p>
                    </Grid>
                </div>
            </div>
        </>
    );
}
