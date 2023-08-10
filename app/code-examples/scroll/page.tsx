import Headline from "@/app/components/Headline";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionParagraph from "@/app/components/SectionParagraph";
import SectionHeadline from "@/app/components/SectionHeadline";
import ScrollAnimationContainer from "@/app/code-examples/scroll/ScrollAnimationContainer";

export const metadata = {
    title: "Scroll Component",
    description: "Code Example for a scroll animation component",
};

export default function Page() {
    return (
        <main>
            <SectionBackground>
                <SectionGrid>
                    <div className={"col-content pb-8"}>
                        <Headline className={"text-pink-600"}>Demo</Headline>
                        <SectionHeadline>Zoom into text</SectionHeadline>
                        <SectionParagraph>
                            I believe beeing able to quickly adapt to new technologies is one of the most valueabe skills for developers,
                            especially in the rapidly aternating field of web development.
                        </SectionParagraph>
                    </div>
                </SectionGrid>
            </SectionBackground>
            <ScrollAnimationContainer />
        </main>
    );
}
