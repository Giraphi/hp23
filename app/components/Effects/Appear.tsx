import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface AppearProps {
    children: ReactNode;
    delay?: number;
    once?: boolean;
    disableTransform?: boolean;
    className?: string;
}

export default function Appear(props: AppearProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: props.once });

    return (
        <motion.div
            className={props.className}
            ref={ref}
            initial={{ opacity: 0, y: props.disableTransform ? 0 : 15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: props.disableTransform ? 0 : 5 }}
            transition={{ duration: 0.5, delay: props.delay }}
        >
            {props.children}
        </motion.div>
    );
}
