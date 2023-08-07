import { useEffect, useState } from "react";
import { PuzzleDimensions } from "@/app/components/CodeExamples/Puzzle/Puzzle";
import PuzzleAnimation from "@/app/components/CodeExamples/Puzzle/PuzzleAnimation";
import Image, { StaticImageData } from "next/image";
import { Mod } from "@/app/components/CodeExamples/Puzzle/useClipPathConfig";

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
