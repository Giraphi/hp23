import React from "react";
import { motion } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/Puzzle/Puzzle";

export type RectConfig = {
    width: number;
    height: number;
    originX: number;
    originY: number;
    scale: number;
};

export interface PuzzleAnimationRectProps {
    className: string;
    dimensions: PuzzleDimensions;
    rectConfig: RectConfig;
    duration: number;
    times: number[];
}

export default function PuzzleAnimationRect(props: PuzzleAnimationRectProps) {
    return (
        <motion.rect
            className={"rect1"}
            x={0}
            y={0}
            width={`${props.dimensions.width * props.rectConfig.width}px`}
            height={`${props.dimensions.height * props.rectConfig.height}px`}
            style={{
                originX: `${props.dimensions.width * props.rectConfig.originX}px`,
                originY: `${props.dimensions.height * props.rectConfig.originY}px`,
            }}
            animate={{
                scale: [1, props.rectConfig.scale, props.rectConfig.scale, 1],
            }}
            exit={{
                scale: [1, props.rectConfig.scale, props.rectConfig.scale, 0],
            }}
            transition={{
                duration: props.duration,
                times: props.times,
                ease: ["circOut", "linear", "circIn"],
            }}
        />
    );
}
