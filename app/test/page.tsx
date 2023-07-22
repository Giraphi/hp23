"use client";
import { PageProps } from "@/app/puzzle/page";
import { useScroll, useTransform, motion, useMotionTemplate, useViewportScroll } from "framer-motion";
import { useRef } from "react";

export default function Page(props: PageProps) {
    const ref = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0lvh", "50lvh"]);

    return (
        <div className={"h-[2000px] overflow-hidden bg-gradient-to-b from-red-900 to-red-50"}>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <h1>TExt</h1>
            <motion.div
                className={"h-[50px] bg-lime"}
                style={{ y }}
            >
                Parallax
            </motion.div>
        </div>
    );
}
