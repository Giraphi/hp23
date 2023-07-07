import React, { useState } from "react";

import { motion } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/Puzzle/Puzzle";
import styled from "styled-components";
import PuzzleAnimationRect, { RectConfig } from "@/app/components/Puzzle/PuzzleAnimationRect";

export const backgroundAnimationDurationMs = 800;
export const backgroundAnimationFreezePercentage = 0.2;
const backgroundScaleFactor = 1.1;

export const StyledAnimation = styled(motion.div)<{ $clipId: string; $muted?: boolean }>`
    width: 100%;
    height: 100%;
    grid-row: 1;
    grid-column: 1;
    clip-path: ${(props) => `url(#${props.$clipId})`};
`;

export interface AnimationClipPathConfig {
    rect1Scale: number;
    rect1Width: number;
    rect1Height: number;
    rect1OriginX: number;
    rect1OriginY: number;

    rect2Scale: number;
    rect2Width: number;
    rect2Height: number;
    rect2OriginX: number;
    rect2OriginY: number;

    rect3Scale: number;
    rect3Width: number;
    rect3Height: number;
    rect3OriginX: number;
    rect3OriginY: number;
}

export interface PuzzleBackgroundProps {
    children: React.ReactNode;
    dimensions: PuzzleDimensions;
    index: number;
    muted?: boolean;
}

export default function PuzzleAnimation(props: PuzzleBackgroundProps) {
    const { dimensions } = props;
    const times = [0, 0.45, 0.55, 1];
    const duration = props.muted ? 0 : 1;
    const clipId = `PuzzleSlide-svgClip-${props.index}`;

    // With useState we keep clipPathConfig consistent during re-renders! Otherwise framer-motion may re-execute the animations
    const [clipPathConfig] = useState<Record<string, RectConfig>>(
        props.index % 2 === 0
            ? {
                  rect1: {
                      scale: 0.2 * random(),
                      width: 1.2 * random(),
                      height: 0.8,
                      originX: 0.15 * random(),
                      originY: 0,
                  },
                  rect2: {
                      scale: 0.1 * random(),
                      width: 0.8 * random(),
                      height: 1.8,
                      originX: 0.58 * random(),
                      originY: 0.3 * random(),
                  },
                  rect3: {
                      scale: 0.1 * random(),
                      width: 2.2 * random(),
                      height: 1,
                      originX: 0.7 * random(),
                      originY: 0.77 * random(),
                  },
              }
            : {
                  rect1: {
                      scale: 0.08 * random(),
                      width: 1.7 * random(),
                      height: 0.9,
                      originX: 0.4 * random(),
                      originY: 0,
                  },
                  rect2: {
                      scale: 0.15 * random(),
                      width: 1.3 * random(),
                      height: 1.2 * random(),
                      originX: 0.4 * random(),
                      originY: 0.5 * random(),
                  },
                  rect3: {
                      scale: 0.1 * random(),
                      width: 1.5 * random(),
                      height: 1.4 * random(),
                      originX: 0.73 * random(),
                      originY: 0.4 * random(),
                  },
              }
    );

    function random() {
        return 1;
        // const min = 0.7;
        // const max = 1.3;
        // return Math.random() * (max - min) + min;
    }

    // For some configurations, that "white triangle" graphic glitch is happening in chrome during the animation
    // (but only on high res screens?).
    // The glitch doesn't seem to appear in the current configuration, but be careful when changing it.
    // Previously we had "rect3Height" set to 1 instead of 1.1 in the first block which made the glitch appear
    // The reason for the glitch or how to safely avoid it is currently unknown.

    console.log(props.dimensions);

    return (
        <motion.div
            style={{ width: "100%", height: "100%", gridRow: 1, gridColumn: 1 }}
            animate={{
                zIndex: 20,
            }}
            exit={{
                zIndex: 10,
            }}
            transition={{ times, duration, delay: duration / 2 }}
        >
            <StyledAnimation
                $clipId={clipId}
                $muted={props.muted}
            >
                {props.children}

                <svg
                    width="0"
                    height="0"
                >
                    <defs>
                        <clipPath id={clipId}>
                            <PuzzleAnimationRect
                                className={"rect1"}
                                dimensions={dimensions}
                                rectConfig={clipPathConfig.rect1}
                                times={times}
                                duration={duration}
                            />

                            <PuzzleAnimationRect
                                className={"rect2"}
                                dimensions={dimensions}
                                rectConfig={clipPathConfig.rect2}
                                times={times}
                                duration={duration}
                            />

                            <PuzzleAnimationRect
                                className={"rect3"}
                                dimensions={dimensions}
                                rectConfig={clipPathConfig.rect3}
                                times={times}
                                duration={duration}
                            />
                        </clipPath>
                    </defs>
                </svg>
            </StyledAnimation>
        </motion.div>
    );
}
