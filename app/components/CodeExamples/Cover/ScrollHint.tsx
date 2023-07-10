import React from "react";
import ChevronDown from "./chevron-down.svg";
import { motion } from "framer-motion";

export interface ScrollHintProps {}

const variants = {
    visible: {
        y: [-3, 0, 0],
        opacity: [0, 1, 0],
        transition: {
            repeat: Infinity,
            duration: 2,
        },
    },
};

export default function ScrollHint(props: ScrollHintProps) {
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <span className={"font-sans text-base font-bold tracking-wider"}>Scroll</span>
            <motion.div
                animate={"visible"}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"text-lg"} />
                </motion.div>

                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"relative bottom-[0.9rem] text-lg"} />
                </motion.div>
                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"relative bottom-[1.8rem] text-lg"} />
                </motion.div>
            </motion.div>
        </div>
    );
}
