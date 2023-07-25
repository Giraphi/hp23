import React, { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface CardsProps {
    children?: ReactNode;
    className?: string;
}

export default function Cards(props: CardsProps) {
    const ref = useRef(null);
    const small = useDeviceStore().device <= Device.md;
    const inView = useInView(ref, { margin: "30% 0% -20% 0%" });

    return (
        <motion.div
            transition={inView && !small ? { staggerChildren: 0.2 } : {}}
            ref={ref}
            initial={small ? "show" : "hide"}
            animate={inView || small ? "show" : "hide"}
            className={twMerge(`flex flex-col items-center gap-4 md:gap-6 lg:flex-row lg:items-stretch lg:gap-8`, props.className)}
        >
            {props.children}
        </motion.div>
    );
}
