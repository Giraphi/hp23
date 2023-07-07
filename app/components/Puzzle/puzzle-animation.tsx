import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { Dimensions } from "./puzzle-slide";
import { easeFunction, zIndexes } from "@/app/components/Puzzle/style-constants";
import { motion, useTransform } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/Puzzle/puzzle";

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
    clipId: string;
    clipPathConfig: AnimationClipPathConfig;
    children: React.ReactNode;
    dimensions: PuzzleDimensions;
    muted?: boolean;
}

const scale = [1, 0.2, 0.2, 1];

export default function PuzzleAnimation(props: PuzzleBackgroundProps) {
    const { dimensions } = props;
    const times = [0, 0.4, 0.6, 1];
    const duration = props.muted ? 0 : 0.8;
    const { rect1Scale } = props.clipPathConfig;
    //
    // const scale = useMemo(() => {
    //     return [1, rect1Scale, rect1Scale, 0];
    // }, [rect1Scale]);

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
                $clipId={props.clipId}
                $muted={props.muted}
            >
                {props.children}

                <svg
                    width="0"
                    height="0"
                >
                    <defs>
                        <clipPath id={props.clipId}>
                            <motion.rect
                                key={props.clipId}
                                className={"rect1"}
                                x={0}
                                y={0}
                                width={`${dimensions.width * props.clipPathConfig.rect1Width}px`}
                                height={`${dimensions.height * props.clipPathConfig.rect1Height}px`}
                                style={{
                                    transformOrigin: `${dimensions.width * props.clipPathConfig.rect1OriginX}px
                                         ${dimensions.height * props.clipPathConfig.rect1OriginY}px`,
                                }}
                                animate={{
                                    scale: [1, rect1Scale, rect1Scale, 1],
                                }}
                                exit={{
                                    scale: [1, rect1Scale, rect1Scale, 0],
                                }}
                                transition={{ times, duration }}
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
            </StyledAnimation>
        </motion.div>
    );
}
