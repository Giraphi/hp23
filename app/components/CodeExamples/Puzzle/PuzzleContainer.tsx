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
            {props.images.map((image, index) => (
                <PuzzleAnimation
                    key={index}
                    index={index}
                    dimensions={props.dimensions}
                    isVisible={index === props.activeSlide}
                    muted={muted}
                >
                    <div className={"relative h-full"}>
                        <Image
                            placeholder={"blur"}
                            fill={true}
                            className={"object-cover"}
                            src={image}
                            alt={"random demo image"}
                        />
                    </div>
                </PuzzleAnimation>
            ))}

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
