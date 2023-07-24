import React from "react";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import SectionText from "@/app/components/SectionText";
import SectionParagraph from "@/app/components/SectionParagraph";
import CodeExampleItems from "@/app/components/Sections/CodeExamples/CodeExampleItems";

export interface CodeExamplesProps {}

export default function CodeExamples(props: CodeExamplesProps) {
    return (
        <SectionBackground startDark={true}>
            <SectionGrid className={"relative z-20"}>
                <div className={" col-content"}>
                    <SectionHeadline>Code Examples</SectionHeadline>
                </div>
                <SectionText>
                    <SectionParagraph>
                        If you’d like to dive into some hands on code or maybe get some inspiration for your own projects, I’ve selected
                        some interesting components I’ve been coding recently.
                    </SectionParagraph>
                    <SectionParagraph disableSpace={true}>
                        Each example comes with a live demo and a link to the code on github.
                    </SectionParagraph>
                </SectionText>

                <div className={"col-content"}>
                    <CodeExampleItems />
                </div>
            </SectionGrid>
        </SectionBackground>
    );
}
