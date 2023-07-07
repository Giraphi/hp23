"use client";

import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import ArrowRight32 from "./cursor-svgs/arrow-right-32.svg";
import ArrowLeft32 from "./cursor-svgs/arrow-left-32.svg";

import desk from "@/app/components/CodeExamples/Puzzle/images/desk.jpg";
import floor from "@/app/components/CodeExamples/Puzzle/images/floor.jpg";
import paint from "@/app/components/CodeExamples/Puzzle/images/paint.jpg";
import office from "@/app/components/CodeExamples/Puzzle/images/office.jpg";

import { zIndexes } from "@/app/components/CodeExamples/Puzzle/puzzle-style-constants";
import Head from "next/head";
import PuzzleContainer from "@/app/components/CodeExamples/Puzzle/PuzzleContainer";

const StyledSizing = styled.div`
    width: 100%;
    aspect-ratio: 1.61;
    max-height: 70vh;
`;

const StyledClickLeftArea = styled.div`
    grid-row: 1/-1;
    grid-column: screen-left/content-col-7;
    cursor: url(${ArrowLeft32}) 8 8, pointer;
    z-index: ${zIndexes.view};
`;

const StyledClickRightArea = styled.div`
    grid-row: 1/-1;
    grid-column: content-col-7/screen-right;
    cursor: url(${ArrowRight32}) 8 8, pointer;
    z-index: ${zIndexes.view};
    margin-left: -20px;
`;

const StyledCtaLink = styled.div`
    z-index: ${zIndexes.viewButtonElements};
`;

const StyledImage = styled.div<{ $imageSrc: string }>`
    background-image: url(${(props) => props.$imageSrc});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center right;
`;

const StyledGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
`;

const StyledGridItem = styled.div`
    grid-row: 1;
    grid-column: 1;
`;

export type PuzzleDimensions = { width: number; height: number };

// export const autoProgressIntervalMs = 5000 + background$animationDurationMs;

export default function Puzzle() {
    const images = [desk, floor, paint, office];
    const numSlides = images.length;
    const ref = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [dimensions, setDimensions] = useState<PuzzleDimensions | undefined>(undefined);

    function modulo(n: number, m: number) {
        // will deal correctly with negative numbers, unlike the "%" operator
        return ((n % m) + m) % m;
    }

    function onLeftClick() {
        setActiveSlide(modulo(activeSlide - 1, numSlides));
    }

    function onRightClick() {
        setActiveSlide(modulo(activeSlide + 1, numSlides));
    }

    useEffect(() => {
        function handleResize() {
            if (!ref.current) {
                return;
            }
            setDimensions({ width: ref.current.clientWidth, height: ref.current?.clientHeight });
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Head>
                {images.map((image) => (
                    <link
                        key={image.src}
                        rel="preload"
                        href={image.src}
                        as="image"
                    />
                ))}
            </Head>
            <StyledSizing ref={ref}>
                {!!dimensions && (
                    <>
                        <StyledGrid>
                            <PuzzleContainer
                                images={images}
                                activeSlide={activeSlide}
                                dimensions={dimensions}
                            />
                        </StyledGrid>
                    </>
                )}
                <>
                    <button onClick={onLeftClick}>left</button>
                    <button onClick={onRightClick}>right</button>
                </>
            </StyledSizing>
        </>
    );
}
