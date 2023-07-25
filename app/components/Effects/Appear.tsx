import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface AppearProps {
    children: ReactNode;
    delay?: number;
    once?: boolean;
}

export default function Appear(props: AppearProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: props.once });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 5 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.6, delay: props.delay }}
        >
            {props.children}
        </motion.div>
    );
}
