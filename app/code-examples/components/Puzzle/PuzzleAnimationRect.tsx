import { motion } from "framer-motion";
import { RectConfig } from "@/app/code-examples/components/Puzzle/useClipPathConfig";
import { PuzzleDimensions } from "@/app/code-examples/components/Puzzle/Puzzle";

export interface PuzzleAnimationRectProps {
    className?: string;
    dimensions: PuzzleDimensions;
    rectConfig: RectConfig;
    duration: number;
    times: number[];
    isVisible: boolean;
}

export default function PuzzleAnimationRect(props: PuzzleAnimationRectProps) {
    return (
        <motion.rect
            x={0}
            y={0}
            width={`${props.dimensions.width * props.rectConfig.width}px`}
            height={`${props.dimensions.height * props.rectConfig.height}px`}
            style={{
                originX: `${props.dimensions.width * props.rectConfig.originX}px`,
                originY: `${props.dimensions.height * props.rectConfig.originY}px`,
            }}
            animate={
                props.isVisible
                    ? { scale: [1, props.rectConfig.scale, props.rectConfig.scale, 1] }
                    : { scale: [1, props.rectConfig.scale, props.rectConfig.scale, 0] }
            }
            transition={{
                duration: props.duration,
                times: props.times,
                ease: ["circOut", "linear", "circIn"],
            }}
        />
    );
}
