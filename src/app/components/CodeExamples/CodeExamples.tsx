import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import SectionHeadline from "@/src/components/SectionHeadline";
import SectionText from "@/src/components/SectionText";
import SectionParagraph from "@/src/components/SectionParagraph";
import CodeExampleItems from "@/src/app/components/CodeExamples/CodeExampleItems";
import { SectionId } from "@/src/store/useActiveSectionStore";
import ScrollTarget from "@/src/components/ScrollTarget";
import Section from "@/src/components/Section";

export interface CodeExamplesProps {}

export default function CodeExamples(props: CodeExamplesProps) {
    return (
        <Section sectionId={SectionId.codeExamples}>
            <SectionBackground startDark={true}>
                <ScrollTarget id={SectionId.codeExamples} />

                <SectionGrid>
                    <div className={" col-content"}>
                        <SectionHeadline>Code Examples</SectionHeadline>
                    </div>
                    <SectionText>
                        <SectionParagraph>
                            If you’re up for some hands on code or maybe looking for some inspiration for your own projects, I’ve selected
                            some interesting components I’ve been coding recently.
                        </SectionParagraph>
                        <SectionParagraph disableSpace={true}>Each example comes with a live demo on codesandbox.</SectionParagraph>
                    </SectionText>

                    <div className={"col-content"}>
                        <CodeExampleItems />
                    </div>
                </SectionGrid>
            </SectionBackground>
        </Section>
    );
}
