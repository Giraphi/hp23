import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/Puzzle/Puzzle";
import desk from "@/app/components/Puzzle/images/desk.jpg";
import floor from "@/app/components/Puzzle/images/floor.jpg";
import styled from "styled-components";
import PuzzleAnimation from "@/app/components/Puzzle/PuzzleAnimation";
import { StaticImageData } from "next/image";

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
    images: StaticImageData[];
}

export default function PuzzleContainer(props: PuzzleContainerProps) {
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        setTimeout(() => setMuted(false));
    }, []);

    return (
        <>
            <AnimatePresence initial={false}>
                <PuzzleAnimation
                    key={props.activeSlide}
                    index={props.activeSlide}
                    dimensions={props.dimensions}
                    muted={muted}
                >
                    <StyledImage $imageSrc={props.images[props.activeSlide].src} />
                </PuzzleAnimation>
            </AnimatePresence>
        </>
    );
}
