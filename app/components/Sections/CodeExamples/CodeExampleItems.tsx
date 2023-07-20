import React from "react";
import Cards from "@/app/components/Cards/Cards";
import VideoCard from "@/app/components/Cards/VideoCard";

export interface CodeExampleItemsProps {}

export default function CodeExampleItems(props: CodeExampleItemsProps) {
    return (
        <Cards className={"col-content"}>
            <VideoCard
                videoName={"puzzle"}
                headline={"Puzzle Animation"}
            >
                Spice up image sliders with some cool glitch-style visuals to keep the users interested. Implementation is based around svg
                clip paths.
            </VideoCard>
        </Cards>
    );
}
