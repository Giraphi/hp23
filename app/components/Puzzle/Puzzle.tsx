"use client";

import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import ArrowRight32 from "./cursor-svgs/arrow-right-32.svg";
import ArrowLeft32 from "./cursor-svgs/arrow-left-32.svg";

import desk from "@/app/components/Puzzle/images/desk.jpg";
import floor from "@/app/components/Puzzle/images/floor.jpg";
import paint from "@/app/components/Puzzle/images/paint.jpg";

import { zIndexes } from "@/app/components/Puzzle/puzzle-style-constants";
import Head from "next/head";
import useIsFirstRender from "@/app/components/Puzzle/useIsFirstRender";
import PuzzleContainer from "@/app/components/Puzzle/PuzzleContainer";

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

export type PuzzleDimensions = { width: number; height: number };

// export const autoProgressIntervalMs = 5000 + background$animationDurationMs;

export default function Puzzle() {
    const [activeSlide, setActiveSlide] = useState(0);
    const numSlides = 2;
    const ref = useRef<HTMLDivElement>(null);
    const isFirstRender = useIsFirstRender();
    const [dimensions, setDimensions] = useState<PuzzleDimensions | undefined>(undefined);

    function onLeftClick() {
        setActiveSlide((activeSlide - 1 + numSlides) % numSlides);
    }

    function onRightClick() {
        setActiveSlide((activeSlide + 1) % numSlides);
    }

    const images = [desk, floor];

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
            <div
                className={"h-[70vh]"}
                ref={ref}
            >
                {!!dimensions && (
                    <>
                        <StyledContainer>
                            <PuzzleContainer
                                activeSlide={activeSlide}
                                dimensions={dimensions}
                            />
                        </StyledContainer>
                    </>
                )}
                <>
                    <button onClick={onLeftClick}>left</button>
                    <button onClick={onRightClick}>right</button>
                </>
            </div>
        </>
    );
}
