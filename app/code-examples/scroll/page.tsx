// "use client";

import Headline from "@/app/components/Headline";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionParagraph from "@/app/components/SectionParagraph";
import ScrollAnimationContainer from "@/app/code-examples/scroll/ScrollAnimationContainer";
import GithubIcon from "@/app/assets/github.svg";
import CodesandboxIcon from "@/app/assets/codesandbox.svg";
import IconButton from "@/app/components/IconButton";
import TextLink from "@/app/components/TextLink";
import InlineCode from "@/app/components/InlineCode";
import SectionText from "@/app/components/SectionText";

export const metadata = {
    title: "Scroll Component",
    description: "Code Example for a scroll animation component",
};

export default function Page() {
    return (
        <main>
            <SectionBackground>
                <SectionGrid className={"pb-0 lg:pb-0"}>
                    <SectionText className={"pb-0 lg:pb-8 xl:pb-0"}>
                        <Headline className={"pb-6 lg:pb-8"}>Zoom into text</Headline>

                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Idea</h3>
                        <SectionParagraph className={"pb-6"}>
                            The design idea is based on similar animations that have been used by{" "}
                            <TextLink href={"www.apple.com/"}>apple.com</TextLink> in the past on various product pages.
                        </SectionParagraph>
                        <SectionParagraph className={"pb-6 lg:pb-8"}>
                            This react implementation uses <TextLink href={"https://www.framer.com/motion/"}>framer-motion</TextLink>
                            &rsquo;s <InlineCode href={"https://www.framer.com/motion/use-scroll/"}>useScroll()</InlineCode> to detect the
                            user&rsquo;s scroll progress and adjusts opacity and zoom of the overlay accordingly. Transparency of the text
                            is achieved with css{" "}
                            <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode"}>
                                mix-blend-mode: multiply
                            </InlineCode>
                            . Layout is build around{" "}
                            <InlineCode href={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"}>position: sticky</InlineCode>.
                        </SectionParagraph>

                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Code</h3>
                        <SectionParagraph className={"pb-2"}>Find the code for this component on:</SectionParagraph>
                        <div className={"inline-flex flex-wrap gap-2 pb-6 lg:pb-8"}>
                            <IconButton
                                className={"text-white"}
                                Icon={GithubIcon}
                            >
                                GitHub
                            </IconButton>
                            <IconButton
                                className={"text-white"}
                                Icon={CodesandboxIcon}
                            >
                                CodeSandbox
                            </IconButton>
                        </div>

                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Demo</h3>
                    </SectionText>
                </SectionGrid>
            </SectionBackground>

            <SectionBackground startDark={true}>
                <SectionGrid className={"pt-0"}>
                    <div className={"col-content"}>
                        <ScrollAnimationContainer />
                    </div>
                </SectionGrid>
            </SectionBackground>
        </main>
    );
}
