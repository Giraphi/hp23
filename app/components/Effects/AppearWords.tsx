"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export interface AppearProps {
    text: string;
    slow?: boolean;
    delay?: number;
    once?: boolean;
}

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

export default function AppearWords(props: AppearProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "0% 0% -20% 0%",
        amount: "some",
        once: props.once,
    });

    const staggerChildren = props.slow ? 0.12 : 0.06;
    const duration = props.slow ? 0.3 : 0.15;
    const delayChildren = props.delay ?? 0;
    const words = props.text.split(" ");

    return (
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
            transition={isInView ? { staggerChildren, delayChildren } : {}}
        >
            {words.map((word, i) => (
                <React.Fragment key={i}>
                    <motion.span
                        variants={variants}
                        className={"inline-block"}
                        transition={{ duration }}
                    >
                        {word}
                    </motion.span>
                    <span> </span>
                </React.Fragment>
            ))}
        </motion.div>
    );
}
