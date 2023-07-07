"use client";

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import styled, { css } from "styled-components";
import ArrowRight32 from "./cursor-svgs/arrow-right-32.svg";
import ArrowLeft32 from "./cursor-svgs/arrow-left-32.svg";

import desk from "@/app/components/Puzzle/images/desk.jpg";
import floor from "@/app/components/Puzzle/images/floor.jpg";
import paint from "@/app/components/Puzzle/images/paint.jpg";
import PuzzleSlide from "@/app/components/Puzzle/puzzle-slide";
import useWindowDimensions from "@/app/components/Puzzle/use-window-dimensions";
import { zIndexes } from "@/app/components/Puzzle/style-constants";
import RandomContextProvider from "@/app/components/Puzzle/random-context-provider";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

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

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
`;

const StyledGridItem = styled.div`
    grid-row: 1;
    grid-column: 1;
`;

export type PuzzleDimensions = { width?: number; height?: number };

// export const autoProgressIntervalMs = 5000 + background$animationDurationMs;

export default function Puzzle() {
    const [activeSlide, setActiveSlide] = useState(0);
    const numSlides = 2;
    const windowDimensions = useWindowDimensions();
    const ref = useRef<HTMLDivElement>(null);

    function onLeftClick() {
        setActiveSlide((activeSlide - 1 + numSlides) % numSlides);
    }

    function onRightClick() {
        setActiveSlide((activeSlide + 1) % numSlides);
    }

    const images = [desk, floor];
    const dimensions = { width: ref.current?.clientWidth, height: ref.current?.clientHeight };

    console.log(activeSlide);

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
            <RandomContextProvider randomSeed={1}>
                <div
                    className={"h-[70vh]"}
                    ref={ref}
                >
                    <StyledContainer>
                        <AnimatePresence>
                            <StyledGridItem key={activeSlide}>
                                <PuzzleSlide
                                    index={activeSlide}
                                    dimensions={dimensions}
                                >
                                    <StyledImage $imageSrc={images[activeSlide].src} />
                                </PuzzleSlide>
                            </StyledGridItem>
                        </AnimatePresence>
                    </StyledContainer>

                    <>
                        <button onClick={onLeftClick}>left</button>
                        <button onClick={onRightClick}>right</button>
                    </>
                </div>
            </RandomContextProvider>
        </>
    );
}
