"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/MeScene/MeCanvas";
import { MotionValue, motion, useTransform } from "framer-motion";
import { useDeviceStore } from "@/app/store/useDeviceStore";
import Grid from "@/app/components/Grid/Grid";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
}

export default function MeScene(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);
    const device = useDeviceStore((state) => state.device);
    const opacity = useTransform(props.scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                {/* re-mount the whole canvas. Otherwise we'd have to manually reset all zoom/rotates etc. */}
                <div
                    className={`sticky top-0 h-[100vh] w-full overflow-hidden lg:static`}
                    key={device}
                >
                    <Canvas className={"touch-action-y"}>
                        <MeCanvas scrollProgress={props.scrollYProgress} />
                    </Canvas>

                    <Grid className={"absolute bottom-[10vh] lg:hidden"}>
                        <motion.p
                            style={{ opacity }}
                            className={"col-span-2 col-start-3 text-center"}
                        >
                            ... and I always love challenges :)
                        </motion.p>
                    </Grid>
                </div>
            </div>
        </>
    );
}
