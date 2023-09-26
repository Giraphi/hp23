"use client";

import { useEffect, useRef, useState } from "react";

import brutal1 from "./images/brutal1.jpg";
import brutal2 from "./images/brutal2.jpg";
import brutal3 from "./images/brutal3.jpg";
import PuzzleContainer from "@/app/code-examples/components/Puzzle/PuzzleContainer";

export type PuzzleDimensions = { width: number; height: number };

const autoRotateIntervalMs = 2500;

export default function Puzzle() {
    const images = [brutal1, brutal2, brutal3, brutal1, brutal2, brutal3];
    const numSlides = images.length;
    const ref = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [dimensions, setDimensions] = useState<PuzzleDimensions | undefined>(undefined);
    const [clickHappened, setClickHappened] = useState(false);

    function modulo(n: number, m: number) {
        // will deal correctly with negative numbers, unlike the "%" operator
        return ((n % m) + m) % m;
    }

    function onLeftClick() {
        setClickHappened(true);
        setActiveSlide(modulo(activeSlide - 1, numSlides));
    }

    function onRightClick() {
        setClickHappened(true);
        setActiveSlide(modulo(activeSlide + 1, numSlides));
    }

    useEffect(() => {
        if (clickHappened) {
            return;
        }

        const interval = setInterval(() => {
            if (clickHappened) {
                return;
            }
            setActiveSlide(modulo(activeSlide + 1, numSlides));
        }, autoRotateIntervalMs);

        return () => clearInterval(interval);
    }, [activeSlide, clickHappened, numSlides]);

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
            <div
                ref={ref}
                className={"aspect-image max-h-[80vh]"}
            >
                {!!dimensions && (
                    <>
                        <div className={"grid h-full grid-cols-2 grid-rows-1"}>
                            <PuzzleContainer
                                images={images}
                                activeSlide={activeSlide}
                                dimensions={dimensions}
                            />
                            <div
                                onClick={onLeftClick}
                                className={"z-30 col-start-1 row-start-1 h-full hover:cursor-left-arrow"}
                            />
                            <div
                                onClick={onRightClick}
                                className={"z-30 col-start-2 row-start-1 h-full hover:cursor-right-arrow"}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
