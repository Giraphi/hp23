import React from "react";
import Cards from "@/app/components/Cards/Cards";
import VideoCard from "@/app/components/Cards/VideoCard";

export interface CodeExampleItemsProps {}

export default function CodeExampleItems(props: CodeExampleItemsProps) {
    return (
        <Cards className={"col-content"}>
            <VideoCard
                videoName={"puzzle"}
                headline={"Puzzle Transition"}
            >
                Spice up image sliders with some cool glitch-style visuals to keep the users interested. Implementation is based around svg
                clip paths.
            </VideoCard>

            <VideoCard
                videoName={"dots"}
                headline={"Magnetic Dots"}
            >
                Animate dots in a physically convincing and smooth motion. Perfect as a playful spacer. Implementation is based on
                framer-motion.
            </VideoCard>

            <VideoCard
                videoName={"scroll"}
                headline={"Zoom into Text"}
            >
                Create a visually surprising effect on scroll with css mix-blend-mode. Can be used as a storytelling element to support the
                website flow.
            </VideoCard>
        </Cards>
    );
}
