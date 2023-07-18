import React from "react";
import ChevronDown from "@/app/assets/chevron-down.svg";
import { motion } from "framer-motion";

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

export default function ScrollHint() {
    return (
        <motion.div
            key={"scrollHint"}
            className={"flex flex-col items-center justify-center"}
        >
            <motion.div
                animate={"visible"}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"text-2xl xlg:text-3xl"} />
                </motion.div>

                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"relative -mt-3 text-2xl xlg:text-3xl"} />
                </motion.div>
                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"relative -mt-3 text-2xl xlg:text-3xl"} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
