import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";
import { PuzzleDimensions } from "@/src/app/code-examples/components/Puzzle/Puzzle";
import { Mod } from "@/src/app/code-examples/components/Puzzle/useClipPathConfig";
import PuzzleAnimation from "@/src/app/code-examples/components/Puzzle/PuzzleAnimation";

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

    function getRandomMod(): Mod {
        const enumIndexes = Object.values(Mod).filter((v) => !isNaN(Number(v)));
        return Math.floor(Math.random() * enumIndexes.length);
    }

    return (
        <>
            {props.images.map((image, index) => (
                <PuzzleAnimation
                    key={index}
                    index={index}
                    dimensions={props.dimensions}
                    isVisible={index === props.activeSlide}
                    muted={muted}
                    mod={getRandomMod()}
                >
                    <div className={"relative h-full"}>
                        <Image
                            priority={true}
                            placeholder={"blur"}
                            fill={true}
                            className={"object-cover"}
                            src={image}
                            alt={"random demo image"}
                        />
                    </div>
                </PuzzleAnimation>
            ))}
        </>
    );
}