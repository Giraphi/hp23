import React, { useEffect, useState } from "react";
import ChevronDown from "@/app/assets/chevron-down.svg";
import { motion } from "framer-motion";

export interface ScrollHintProps {
    disableText?: boolean;
}

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
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        if (props.disableText) {
            return;
        }
        const timeout = setTimeout(() => {
            setTextVisible(true);
        }, 15000);

        return () => clearTimeout(timeout);
    }, [props.disableText]);

    return (
        <motion.div
            key={"scrollHint"}
            className={"flex flex-col items-center justify-center"}
        >
            {textVisible && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4 }}
                    className={"pb-2 text-base"}
                >
                    scroll
                </motion.span>
            )}
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
