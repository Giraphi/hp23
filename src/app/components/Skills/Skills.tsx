import SectionBackground from "@/components/SectionBackground";
import SectionGrid from "@/components/SectionGrid";
import SectionHeadline from "@/components/SectionHeadline";
import SectionParagraph from "@/components/SectionParagraph";
import SectionText from "@/components/SectionText";
import SkillItems from "@/app/components/Skills/SkillItems/SkillItems";
import { SectionId } from "@/store/useActiveSectionStore";
import { useRef } from "react";
import ScrollTarget from "@/components/ScrollTarget";
import Section from "@/components/Section";

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
    return (
        <Section sectionId={SectionId.skills}>
            <SectionBackground>
                <ScrollTarget id={SectionId.skills} />

                <SectionGrid>
                    <div className={"col-content"}>
                        <SectionHeadline>Skills</SectionHeadline>
                    </div>
                    <SectionText>
                        <SectionParagraph>
                            I believe being able to quickly adapt to new technologies is one of the most valuable skills for developers,
                            especially in the rapidly alternating field of web development.
                        </SectionParagraph>
                        <SectionParagraph>
                            That being said, I’m always keen on studying new technologies and frameworks to add as much tools to my toolbox
                            as possible.
                        </SectionParagraph>
                        <SectionParagraph disableSpace={true}>
                            To name a few, here are some frameworks and technologies I’m currently using in my projects:
                        </SectionParagraph>
                    </SectionText>

                    <div className={"col-content"}>
                        <SkillItems />
                    </div>
                </SectionGrid>
            </SectionBackground>
        </Section>
    );
}
