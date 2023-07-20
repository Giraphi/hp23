import React, { RefObject, useMemo } from "react";

import { motion } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/CodeExamples/Puzzle/Puzzle";
import styled from "styled-components";
import PuzzleAnimationRect from "@/app/components/CodeExamples/Puzzle/PuzzleAnimationRect";
import useClipPathConfig, { AnimationClipPathConfig, Mod } from "@/app/components/CodeExamples/Puzzle/useClipPathConfig";

const backgroundScaleFactor = 1.1;

export const StyledAnimation = styled(motion.div)<{ $clipId: string }>`
    width: 100%;
    height: 100%;
    grid-row: 1;
    grid-column: 1;
    clip-path: ${(props) => `url(#${props.$clipId})`};
    overflow: hidden;
`;

export interface PuzzleBackgroundProps {
    children: React.ReactNode;
    dimensions: PuzzleDimensions;
    index: number;
    muted?: boolean;
    isVisible: boolean;
    mod: Mod;
}

export default function PuzzleAnimation(props: PuzzleBackgroundProps) {
    const { dimensions } = props;
    const times = [0, 0.45, 0.55, 1];
    const duration = props.muted ? 0 : 0.8;
    const clipId = `PuzzleSlide-svgClip-${props.index}`;
    const isEven = props.index % 2 === 0;
    const clipPathConfig: AnimationClipPathConfig = useClipPathConfig(isEven, props.mod, props.isVisible);

    return (
        <motion.div
            className={"col-span-2 col-start-1 row-start-1 h-full"}
            animate={
                props.isVisible
                    ? {
                          zIndex: 20,
                      }
                    : {
                          zIndex: 10,
                      }
            }
            transition={{ times, duration, delay: duration / 2 }}
        >
            <StyledAnimation $clipId={clipId}>
                <motion.div
                    style={{ height: "100%" }}
                    animate={
                        props.isVisible
                            ? {
                                  scale: [1, backgroundScaleFactor, backgroundScaleFactor, 1],
                              }
                            : {
                                  scale: [1, backgroundScaleFactor, backgroundScaleFactor, backgroundScaleFactor],
                              }
                    }
                    transition={{
                        duration: duration,
                        times: times,
                        ease: ["linear"],
                    }}
                >
                    {props.children}
                </motion.div>

                <svg
                    width="0"
                    height="0"
                >
                    <defs>
                        <clipPath id={clipId}>
                            <PuzzleAnimationRect
                                isVisible={props.isVisible}
                                dimensions={dimensions}
                                rectConfig={clipPathConfig.rect1}
                                times={times}
                                duration={duration}
                            />

                            <PuzzleAnimationRect
                                isVisible={props.isVisible}
                                dimensions={dimensions}
                                rectConfig={clipPathConfig.rect2}
                                times={times}
                                duration={duration}
                            />

                            <PuzzleAnimationRect
                                isVisible={props.isVisible}
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
