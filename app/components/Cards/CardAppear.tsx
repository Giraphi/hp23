import React, { ReactNode, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { motion } from "framer-motion";

export interface CardAppearProps {
    children: ReactNode;
    className?: string;
}

const cardVariants = {
    hide: { opacity: 0, x: -15, transition: { duration: 1 } },
    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "circOut" } },
};

export default function CardAppear(props: CardAppearProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const small = useDeviceStore().device <= Device.md;
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            variants={small ? undefined : cardVariants}
            className={props.className}
            style={small ? { opacity, x: 0 } : undefined}
        >
            {props.children}
        </motion.div>
    );
}
