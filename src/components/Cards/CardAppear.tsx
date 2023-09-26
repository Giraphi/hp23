"use client";

import { ReactNode } from "react";
import { Device, useDeviceStore } from "@/store/useDeviceStore";
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
    const small = useDeviceStore((state) => state.device) <= Device.md;

    return (
        <motion.div
            key={`${small}`} // remount if device changes to reset animation
            variants={small ? undefined : cardVariants}
            className={props.className}
        >
            {props.children}
        </motion.div>
    );
}
