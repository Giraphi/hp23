import React, { useRef } from "react";
import styled, { css, keyframes } from "styled-components";

import { Dimensions } from "./puzzle-slide";
import { easeFunction, zIndexes } from "@/app/components/Puzzle/style-constants";
import { motion, useTransform } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/Puzzle/puzzle";

export const backgroundAnimationDurationMs = 800;

export const backgroundAnimationFreezePercentage = 0.2;
const backgroundScaleFactor = 1.1;
const percentageStop = `${50 - (backgroundAnimationFreezePercentage * 100) / 2}%`;
const percentageContinue = `${50 + (backgroundAnimationFreezePercentage * 100) / 2}%`;

const hideRectKeyframes = (scaleFactor: number) => keyframes`
    0% {
        transform: scale(1);
    }
    ${percentageStop} {
        transform: scale(${scaleFactor})
    }
    ${percentageContinue} {
        transform: scale(${scaleFactor})
    }
    100% {
        transform: scale(0);
    }
`;

const showRectKeyframes = (scaleFactor: number) => keyframes`
    0% {
        transform: scale(1);
    }
    ${percentageStop} {
        transform: scale(${scaleFactor})
    }
    ${percentageContinue} {
        transform: scale(${scaleFactor})
    }
    100% {
        transform: scale(1);
    }
`;

const hideChildrenKeyframes = (scaleFactor: number) => keyframes`
    0% {
        transform: scale(1);
    }
    ${percentageStop}, 100% {
        transform: scale(${scaleFactor});
    }
`;

const showChildrenKeyframes = (scaleFactor: number) => keyframes`
    0% {
        transform: scale(1);
    }
    ${percentageStop}, ${percentageContinue} {
        transform: scale(${scaleFactor});
    }
    100% {
        transform: scale(1);
    }
`;

export const StyledAnimation = styled.div<{ $clipId: string }>`
    //position: absolute;
    width: 100%;
    height: 100%;
    //transform: translateZ(0);
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

export interface StyledAnimationProps {
    $triggerHide: boolean;
    $triggerShow: boolean;
    $isOnTop: boolean;
    $clipId: string;
    $animationDurationMs: number;
    $clipPathConfig: AnimationClipPathConfig;
    $isAnimationDisabled: boolean;
}

export interface PuzzleBackgroundProps {
    clipId: string;
    clipPathConfig: AnimationClipPathConfig;
    children: React.ReactNode;
    dimensions: PuzzleDimensions;
}

export default function PuzzleAnimation(props: PuzzleBackgroundProps) {
    const { dimensions } = props;
    // dimensions={{ width: dimensionsRef.current?.clientWidth, height: dimensionsRef.current?.clientHeight }}

    // const rect1Scale = useMotionValue(0);
    // const rect1Scale = useTransform([], [1, props.clipPathConfig.rect1Scale, props.clipPathConfig.rect1Scale, 0]);

    return (
        <StyledAnimation $clipId={props.clipId}>
            {props.children}

            {dimensions.width && dimensions.height && (
                <svg
                    width="0"
                    height="0"
                >
                    <defs>
                        <clipPath id={props.clipId}>
                            <motion.rect
                                className={"rect1"}
                                x={0}
                                y={0}
                                width={`${dimensions.width * props.clipPathConfig.rect1Width}px`}
                                height={`${dimensions.height * props.clipPathConfig.rect1Height}px`}
                                style={{
                                    transformOrigin: `${dimensions.width * props.clipPathConfig.rect1OriginX}px
                                         ${dimensions.height * props.clipPathConfig.rect1OriginY}px`,
                                }}
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, props.clipPathConfig.rect1Scale, props.clipPathConfig.rect1Scale, 1] }}
                                exit={{ scale: [1, props.clipPathConfig.rect1Scale, props.clipPathConfig.rect1Scale, 0] }}
                                transition={{ times: [0, 0.4, 0.6, 1], duration: 0.8 }}
                            />
                            {/*<rect*/}
                            {/*    className={"rect2"}*/}
                            {/*    x={0}*/}
                            {/*    y={0}*/}
                            {/*    width={`${dimensions.width * props.clipPathConfig.rect2Width}px`}*/}
                            {/*    height={`${dimensions.height * props.clipPathConfig.rect2Height}px`}*/}
                            {/*    style={{*/}
                            {/*        transformOrigin: `${dimensions.width * props.clipPathConfig.rect2OriginX}px*/}
                            {/*               ${dimensions.height * props.clipPathConfig.rect2OriginY}px`,*/}
                            {/*    }}*/}
                            {/*/>*/}
                            {/*<rect*/}
                            {/*    className={"rect3"}*/}
                            {/*    x={0}*/}
                            {/*    y={0}*/}
                            {/*    width={`${dimensions.width * props.clipPathConfig.rect3Width}px`}*/}
                            {/*    height={`${dimensions.height * props.clipPathConfig.rect3Height}px`}*/}
                            {/*    style={{*/}
                            {/*        transformOrigin: `${dimensions.width * props.clipPathConfig.rect3OriginX}px*/}
                            {/*               ${dimensions.height * props.clipPathConfig.rect3OriginY}px`,*/}
                            {/*    }}*/}
                            {/*/>*/}
                        </clipPath>
                    </defs>
                </svg>
            )}
        </StyledAnimation>
    );
}
