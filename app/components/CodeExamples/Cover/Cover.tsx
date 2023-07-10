"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import CoverContent from "./CoverContent";

export default function Cover() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const progress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const overlayOpacity = useTransform(progress, [0, 0.02], [1, 0]);
    const childrenOpacity = useTransform(progress, [0.4, 1], [0, 1]);
    const maskOpacity = useTransform(progress, [0, 0.5, 1], [1, 1, 0]);
    const zoom = useTransform(progress, [0, 0.5, 1], [1, 10, 20]);

    return (
        <>
            <div
                className="grid grid-cols-1 grid-rows-[100lvh_300lvh] rounded"
                ref={ref}
            >
                <div className="sticky top-0 col-start-1 row-start-1">
                    <video
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover object-center"
                        src={"./video-3D-high.mp4"}
                    ></video>
                    <div
                        className="absolute left-0 top-0 h-full w-full"
                        style={{ background: "linear-gradient(to top, #000 0%, transparent 10%)" }}
                    ></div>
                </div>

                <motion.div
                    className="sticky top-0 col-start-1 row-start-1 flex items-center justify-center"
                    style={{ opacity: childrenOpacity }}
                >
                    <h1>HELLLO</h1>
                </motion.div>

                {/* Mask trick */}
                <motion.div
                    style={{ opacity: maskOpacity }}
                    className={
                        "sticky top-0 col-start-1 row-start-1 flex w-full items-center justify-center overflow-hidden mix-blend-multiply"
                    }
                >
                    <motion.div
                        className={"h-full w-full"}
                        style={{ scale: zoom, transformOrigin: "50% 45%" }}
                    >
                        <CoverContent mask={true} />
                    </motion.div>
                </motion.div>

                {/* Overlay with colored text and no mix-blend-mode */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className={"sticky top-0 col-start-1 row-start-1 flex w-full items-center justify-center overflow-hidden"}
                >
                    <motion.div
                        className={"h-full w-full"}
                        style={{ scale: zoom, transformOrigin: "50% 45%" }}
                    >
                        <CoverContent mask={true} />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
