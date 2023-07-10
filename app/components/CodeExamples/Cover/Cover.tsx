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
    const coverOpacity = useTransform(progress, [0, 0.6, 1], [1, 1, 0]);
    const childrenOpacity = useTransform(progress, [0.4, 1], [0, 1]);
    const zoom = useTransform(progress, [0, 0.5, 1], [1, 15, 25]);

    return (
        <div>
            <div
                className="grid grid-cols-1 grid-rows-[100dvh_300dvh] rounded"
                ref={ref}
            >
                <div className="sticky top-0 col-start-1 row-start-1 bg-lime-700">
                    {/*TODO: this seems to be very performance heavy. try lower resolution or webm? Maybe performance problem comes because  of mix-blend-mode*/}
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
                    className="sticky top-0 col-start-1 row-start-1 flex flex-col items-center justify-center text-white"
                    style={{ opacity: childrenOpacity, textShadow: "1px 1px black" }}
                >
                    <h1 className={"text-7xl text-white"}>Welcome</h1>
                    <p className={"pl-8 pr-8 pt-8 text-center text-2xl"}>
                        This animation is making use of the css property <br />
                        <span className={"font-mono"}>mix-blend-mode: multiply</span>{" "}
                    </p>
                </motion.div>

                <motion.div
                    className="sticky top-0 col-start-1 row-start-1 bg-white"
                    style={{ opacity: overlayOpacity }}
                ></motion.div>

                <motion.div
                    style={{ opacity: coverOpacity }}
                    className={
                        "sticky top-0 col-start-1 row-start-1 flex w-full items-center justify-center overflow-hidden mix-blend-multiply"
                    }
                >
                    <motion.div
                        className={"h-full w-full"}
                        style={{ scale: zoom, transformOrigin: "center" }}
                    >
                        <CoverContent />
                    </motion.div>
                </motion.div>
            </div>
            <div className={"h-[50dvh] bg-black"}>
                <h1 className={"text-mono pt-16 text-center text-5xl text-white"}>Site flow continues here ....</h1>
            </div>
        </div>
    );
}
