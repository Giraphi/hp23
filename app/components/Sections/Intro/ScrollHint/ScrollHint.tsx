import React from "react";
import ChevronDown from "@/app/assets/chevron-down.svg";
import { motion } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface ScrollHintProps {
    appearDelay?: number;
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
    const { device } = useDeviceStore();

    function handleClick() {
        let length = window.innerHeight * 0.2;

        if (device >= Device.md) {
            length = window.innerHeight * 0.3;
        }
        if (device >= Device.lg) {
            length = window.innerHeight * 0.4;
        }

        console.log(length);

        window.scrollBy({
            top: length,
            behavior: "smooth",
        });
    }

    return (
        <motion.div
            onClick={handleClick}
            key={"scrollHint"}
            className={"flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full bg-gray-1"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: props.appearDelay ?? 0, duration: 1 }}
        >
            <motion.div
                animate={"visible"}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"text-xl text-white xl:text-3xl"} />
                </motion.div>

                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"relative -mt-3 text-xl text-white xl:text-3xl"} />
                </motion.div>
                <motion.div
                    variants={variants}
                    transition={{ repeat: Infinity }}
                >
                    <ChevronDown className={"relative -mt-3 text-xl text-white xl:text-3xl"} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
