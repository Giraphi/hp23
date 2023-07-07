import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PuzzleDimensions } from "@/app/components/CodeExamples/Puzzle/Puzzle";
import PuzzleAnimation from "@/app/components/CodeExamples/Puzzle/PuzzleAnimation";
import Image, { StaticImageData } from "next/image";

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
                    <div className={"relative h-full"}>
                        <Image
                            placeholder={"blur"}
                            fill={true}
                            className={"object-cover"}
                            src={props.images[props.activeSlide]}
                            alt={"random demo image"}
                        />
                    </div>
                </PuzzleAnimation>
            </AnimatePresence>

            {/* Make browser preload images so they are ready when mounted */}
            <div className={"hidden"}>
                {props.images.map((image, index) => (
                    <Image
                        priority={true}
                        placeholder={"blur"}
                        key={image.src}
                        src={image}
                        alt={"preloading image"}
                    />
                ))}
            </div>
        </>
    );
}
