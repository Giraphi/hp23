"use client";

import Headline from "@/app/components/Headline";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionParagraph from "@/app/components/SectionParagraph";
import ScrollAnimationContainer from "@/app/code-examples/scroll/ScrollAnimationContainer";
import GithubIcon from "@/app/assets/github.svg";
import CodesandboxIcon from "@/app/assets/codesandbox.svg";
import IconButton from "@/app/components/IconButton";

// export const metadata = {
//     title: "Scroll Component",
//     description: "Code Example for a scroll animation component",
// };

export default function Page() {
    return (
        <main>
            <SectionBackground>
                <SectionGrid className={"pb-0"}>
                    <div className={"col-content"}>
                        <Headline className={"pb-4 pt-4"}>Zoom into text</Headline>
                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Idea</h3>
                        <SectionParagraph className={"pb-6"}>
                            I believe beeing able to quickly adapt to new technologies is one of the most valueabe skills for developers,
                            especially in the rapidly aternating field of web development.
                        </SectionParagraph>
                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Links</h3>
                        <SectionParagraph className={"pb-2"}>Find the code for this component on:</SectionParagraph>
                        <div className={"inline-flex flex-wrap gap-2 pb-6"}>
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
                        <h3 className={"pb-2 font-bold text-pink-600"}>Demo</h3>
                    </div>
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
