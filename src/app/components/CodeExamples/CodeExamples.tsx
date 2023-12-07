import SectionBackground from "@/components/SectionBackground";
import SectionGrid from "@/components/SectionGrid";
import SectionHeadline from "@/components/SectionHeadline";
import SectionText from "@/components/SectionText";
import SectionParagraph from "@/components/SectionParagraph";
import CodeExampleItems from "@/app/components/CodeExamples/CodeExampleItems";
import { SectionId } from "@/store/useActiveSectionStore";
import ScrollTarget from "@/components/ScrollTarget";
import Section from "@/components/Section";
import InlineTextLink from "@/components/InlineTextLink";

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
                        <SectionParagraph>
                            Also the code for this website can be found on{" "}
                            <InlineTextLink
                                target="_blank"
                                href="https://github.com/Giraphi/hp23"
                            >
                                GitHub
                            </InlineTextLink>
                            .
                        </SectionParagraph>
                    </SectionText>

                    <div className={"col-content"}>
                        <CodeExampleItems />
                    </div>
                </SectionGrid>
            </SectionBackground>
        </Section>
    );
}
