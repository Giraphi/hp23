import React, { useRef, useState } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import ScrollHint from "@/app/components/ScrollHint/ScrollHint";

export default function ScrollHintFadeOut() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ target: ref });
    const opacity = useTransform(scrollY, [0, 25, 75], [1, 1, 0]);
    const [componentVisible, setComponentVisible] = useState(true);

    useMotionValueEvent(opacity, "change", (v) => {
        const visibleUpdate = v !== 0;
        if (componentVisible === visibleUpdate) {
            return;
        }
        setComponentVisible(visibleUpdate);
    });

    return (
        <div ref={ref}>
            {componentVisible && (
                <div className={"fixed bottom-0 pb-4"}>
                    <motion.div style={{ opacity }}>
                        <ScrollHint />
                    </motion.div>
                </div>
            )}
        </div>
    );
}
