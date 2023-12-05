import Cards from "@/components/Cards/Cards";
import VideoCard from "@/components/Cards/VideoCard";
import { SectionId } from "@/store/useActiveSectionStore";

export interface CodeExampleItemsProps {}

export default function CodeExampleItems(props: CodeExampleItemsProps) {
    return (
        <Cards className={"col-content"}>
            <VideoCard
                codesandBoxLink={`https://codesandbox.io/p/github/Giraphi/demo-puzzle/main?file=%2FREADME.md`}
                githubLink="https://github.com/Giraphi/demo-puzzle"
                videoName={"puzzle"}
                headline={"Puzzle Slider"}
            >
                Spice up image sliders with some cool puzzle-style visuals to keep the users interested. Implementation is based around svg
                clip paths.
            </VideoCard>

            <VideoCard
                githubLink="https://github.com/Giraphi/demo-dots"
                codesandBoxLink={`https://codesandbox.io/p/github/Giraphi/demo-dots/main?file=%2FREADME.md`}
                videoName={"dots"}
                headline={"Magnetic Dots"}
            >
                Animate dots in a physically convincing and smooth motion. Perfect as a playful spacer. Implementation is based on
                framer-motion.
            </VideoCard>

            <VideoCard
                githubLink="https://github.com/Giraphi/demo-scroll"
                codesandBoxLink={`https://codesandbox.io/p/github/Giraphi/demo-scroll/main?file=%2FREADME.md`}
                videoName={"scroll"}
                headline={"Zoom into Text"}
            >
                Create a visually surprising effect on scroll with css mix-blend-mode. Can be used as a storytelling element to support the
                website flow.
            </VideoCard>
        </Cards>
    );
}
