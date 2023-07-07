import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import PuzzleAnimation from "./puzzle-animation";
import RandomContext from "@/app/components/Puzzle/random-context";
import { PuzzleDimensions } from "@/app/components/Puzzle/puzzle";

export type Dimensions = {
    width?: number;
    height?: number;
};

export interface PuzzleAnimationProps {
    index: number;
    children: React.ReactNode;
    dimensions: PuzzleDimensions;
}

export default function PuzzleSlide(props: PuzzleAnimationProps) {
    const clipId = `PuzzleSlide-svgClip-${props.index}`;

    const dimensionsRef = useRef<HTMLDivElement>(null);
    const { getRandom } = useContext(RandomContext);

    const random = useCallback(() => {
        return getRandom(0.95, 1.05);
    }, [getRandom]);

    // For some configurations, that "white triangle" graphic glitch is happening in chrome during the animation
    // (but only on high res screens?).
    // The glitch doesn't seem to appear in the current configuration, but be careful when changing it.
    // Previously we had "rect3Height" set to 1 instead of 1.1 in the first block which made the glitch appear
    // The reason for the glitch or how to safely avoid it is currently unknown.

    // randomize on every render
    const clipPathConfig = useMemo(() => {
        if (props.index % 2 === 0) {
            return {
                rect1Scale: 0.3 * random(),
                rect1Width: 1.2 * random(),
                rect1Height: 1,
                rect1OriginX: 0.15 * random(),
                rect1OriginY: 0,

                rect2Scale: 0.15 * random(),
                rect2Width: 0.8 * random(),
                rect2Height: 2,
                rect2OriginX: 0.58 * random(),
                rect2OriginY: 0.3 * random(),

                rect3Scale: 0.15 * random(),
                rect3Width: 2.2 * random(),
                rect3Height: 1.1,
                rect3OriginX: 0.7 * random(),
                rect3OriginY: 0.77 * random(),
            };
        }

        return {
            rect1Scale: 0.2 * random(),
            rect1Width: 1.7 * random(),
            rect1Height: 1,
            rect1OriginX: 0.4 * random(),
            rect1OriginY: 0,

            rect2Scale: 0.25 * random(),
            rect2Width: 1.3 * random(),
            rect2Height: 1.4 * random(),
            rect2OriginX: 0.4 * random(),
            rect2OriginY: 0.5 * random(),

            rect3Scale: 0.1 * random(),
            rect3Width: 1.5 * random(),
            rect3Height: 1.6 * random(),
            rect3OriginX: 0.73 * random(),
            rect3OriginY: 0.4 * random(),
        };
    }, [props.index, random]);

    return (
        <PuzzleAnimation
            clipId={clipId}
            clipPathConfig={clipPathConfig}
            dimensions={props.dimensions}
        >
            {props.children}
            {/*<div*/}
            {/*    ref={dimensionsRef}*/}
            {/*    style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%" }}*/}
            {/*/>*/}
        </PuzzleAnimation>
    );
}
