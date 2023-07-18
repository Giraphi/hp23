import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollHint from "@/app/components/ScrollHint/ScrollHint";

export interface ScrollHintDelayProps {
    delayMs: number;
    initDelayMs: number;
}

export default function ScrollHintDelay(props: ScrollHintDelayProps) {
    const [componentVisible, setComponentVisible] = useState(!props.delayMs);
    const timeoutRef = useRef<NodeJS.Timeout>();
    const lastDocumentScrollY = useRef(0);

    useEffect(() => {
        function restartTimer(durationMs: number) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setComponentVisible(true);
                lastDocumentScrollY.current = window.scrollY;
            }, durationMs);
        }

        function handleScroll() {
            const deltaY = Math.abs(window.scrollY - lastDocumentScrollY.current);

            if (deltaY < 60) {
                return;
            }

            setComponentVisible(false);
            restartTimer(props.delayMs);
        }

        restartTimer(props.initDelayMs);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutRef.current);
        };
    }, [props.delayMs, props.initDelayMs]);

    return (
        <AnimatePresence>
            {componentVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ScrollHint />
                </motion.div>
            )}{" "}
        </AnimatePresence>
    );
}
