import Cards from "@/src/components/Cards/Cards";
import VideoCard from "@/src/components/Cards/VideoCard";
import { SectionId } from "@/src/store/useActiveSectionStore";

export interface CodeExampleItemsProps {}

export default function CodeExampleItems(props: CodeExampleItemsProps) {
    return (
        <Cards className={"col-content"}>
            <VideoCard
                href={`/code-examples#${SectionId.puzzle}`}
                videoName={"puzzle"}
                headline={"Puzzle Slider"}
            >
                Spice up image sliders with some cool puzzle-style visuals to keep the users interested. Implementation is based around svg
                clip paths.
            </VideoCard>

            <VideoCard
                href={`/code-examples#${SectionId.dots}`}
                videoName={"dots"}
                headline={"Magnetic Dots"}
            >
                Animate dots in a physically convincing and smooth motion. Perfect as a playful spacer. Implementation is based on
                framer-motion.
            </VideoCard>

            <VideoCard
                href={`/code-examples#${SectionId.zoom}`}
                videoName={"scroll"}
                headline={"Zoom into Text"}
            >
                Create a visually surprising effect on scroll with css mix-blend-mode. Can be used as a storytelling element to support the
                website flow.
            </VideoCard>
        </Cards>
    );
}
