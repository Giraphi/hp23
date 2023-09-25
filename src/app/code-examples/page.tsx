import React from "react";
import CodeExampleSection from "@/src/app/code-examples/components/CodeExampleSection";
import Headline from "@/src/components/Headline";
import SectionParagraph from "@/src/components/SectionParagraph";
import InlineTextLink from "@/src/components/InlineTextLink";
import InlineCode from "@/src/components/InlineCode";
import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import SectionText from "@/src/components/SectionText";
import ScrollAnimation from "@/src/app/code-examples/components/ScrollAnimation/ScrollAnimation";
import Puzzle from "@/src/app/code-examples/components/Puzzle/Puzzle";
import { SectionId } from "@/src/store/useActiveSectionStore";

export const metadata = {
    title: "Code Examples",
    description: "Code Example for different components",
};

export interface PageProps {}

export default function Page(props: PageProps) {
    return (
        <main className={"text-lg"}>
            <SectionBackground>
                <SectionGrid className={"pb-0 lg:pb-0"}>
                    <SectionText className={"pb-0 lg:pb-8 xxl:pb-0"}>
                        <Headline className={"pb-6 lg:pb-8"}>Code Examples</Headline>
                        <p>
                            Take a look at some component I&rsquo;ve been coding recently. For each component there are links to the full
                            code on codesandbox & github, a short explanation of the development approach and a running demo implementation.
                        </p>
                    </SectionText>
                </SectionGrid>
            </SectionBackground>

            <CodeExampleSection
                DemoComponent={Puzzle}
                headline={"Puzzle Slider"}
                githubLink={""}
                codesandboxLink={""}
                sectionId={SectionId.puzzle}
            >
                <SectionParagraph className={"pb-6"}>
                    The design for this component was created by the agcency{" "}
                    <InlineTextLink href={"https://www.hellomonday.com/"}>Hello Monday</InlineTextLink> during an early phase for a larger
                    project. Even though this component didn&rsquo;t make it to the final website, I had a lot of fun developing it.
                </SectionParagraph>
                <SectionParagraph className={"pb-6 lg:pb-8"}>
                    In this implementation, each of the slides renders a couple of{" "}
                    <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/"}>{"<rect>"}</InlineCode> elements in
                    addition to the actual image. Those elements are then referenced by css{" "}
                    <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"}>clip-path: url(#id)</InlineCode> to cut
                    out the corresponding areas of the image. From here on we can animate the size of the svg{" "}
                    <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/"}>{"<rect>"}</InlineCode> elements to
                    create the &ldquo;puzzle&rdquo; effect. In our case this is done with{" "}
                    <InlineCode href={"https://www.framer.com/motion/component/"}>{"<motion.rect>"}</InlineCode>. To make it even more
                    interesting, we apply randomness to the position and size to the{" "}
                    <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/"}>{"<rect>"}</InlineCode> elements on every
                    transition. This way that the animation always look slightly different every time it is executed.
                </SectionParagraph>
                <SectionParagraph className={"pb-6 lg:pb-8"}>
                    How to use randomness for creative purposes is always a particulary intersting topic for me. While beeing very strict
                    and logical with the mathematical formulas on the one hand you have the chance to give your elements freedom and
                    unpredictability on the other hand. It&rsquo;s about designing the space and amount of freedom.
                </SectionParagraph>
            </CodeExampleSection>

            <CodeExampleSection
                DemoComponent={ScrollAnimation}
                githubLink={""}
                codesandboxLink={""}
                headline={"Zoom into Text"}
                sectionId={SectionId.zoom}
            >
                <SectionParagraph className={"pb-6"}>
                    The design idea is based on similar animations that have been used by{" "}
                    <InlineTextLink href={"www.apple.com/"}>apple.com</InlineTextLink> in the past on various product pages.
                </SectionParagraph>
                <SectionParagraph className={"pb-6 lg:pb-8"}>
                    This react implementation uses <InlineTextLink href={"https://www.framer.com/motion/"}>framer-motion</InlineTextLink>
                    &rsquo;s <InlineCode href={"https://www.framer.com/motion/use-scroll/"}>useScroll()</InlineCode> to detect the
                    user&rsquo;s scroll progress and adjusts opacity and zoom of the overlay accordingly. Transparency of the text is
                    achieved with css{" "}
                    <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode"}>
                        mix-blend-mode: multiply
                    </InlineCode>
                    . Layout is build around{" "}
                    <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"}>position: sticky</InlineCode>.
                </SectionParagraph>
            </CodeExampleSection>
        </main>
    );
}
