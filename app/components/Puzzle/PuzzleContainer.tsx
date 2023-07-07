import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PuzzleSlide from "@/app/components/Puzzle/puzzle-slide";
import { PuzzleDimensions } from "@/app/components/Puzzle/puzzle";
import desk from "@/app/components/Puzzle/images/desk.jpg";
import floor from "@/app/components/Puzzle/images/floor.jpg";
import styled from "styled-components";

const StyledImage = styled.div<{ $imageSrc: string }>`
    background-image: url(${(props) => props.$imageSrc});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center right;
`;

export interface PuzzleContainerProps {
    activeSlide: number;
    dimensions: PuzzleDimensions;
}

export default function PuzzleContainer(props: PuzzleContainerProps) {
    const images = [desk, floor];
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        setTimeout(() => setMuted(false));
    }, []);

    return (
        <>
            <AnimatePresence initial={false}>
                <PuzzleSlide
                    key={props.activeSlide}
                    index={props.activeSlide}
                    dimensions={props.dimensions}
                    muted={muted}
                >
                    <StyledImage $imageSrc={images[props.activeSlide].src} />
                </PuzzleSlide>
            </AnimatePresence>
        </>
    );
}
