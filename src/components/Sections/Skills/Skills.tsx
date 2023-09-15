import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import SectionHeadline from "@/src/components/SectionHeadline";
import SectionParagraph from "@/src/components/SectionParagraph";
import SectionText from "@/src/components/SectionText";
import SkillItems from "@/src/components/Sections/Skills/SkillItems/SkillItems";
import useNavigationSection from "@/src/hooks/useNavigationSection";
import { SectionId } from "@/src/store/useActiveSectionStore";
import { useRef } from "react";
import ScrollTarget from "@/src/components/ScrollTarget";
import Section from "@/src/components/Section";

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
    return (
        <Section id={SectionId.skills}>
            <SectionBackground>
                <ScrollTarget id={SectionId.skills} />

                <SectionGrid>
                    <div className={"col-content"}>
                        <SectionHeadline>Skills</SectionHeadline>
                    </div>
                    <SectionText>
                        <SectionParagraph>
                            I believe beeing able to quickly adapt to new technologies is one of the most valueabe skills for developers,
                            especially in the rapidly aternating field of web development.
                        </SectionParagraph>
                        <SectionParagraph>
                            That beeing said, I’m always keen on studying new technologies and frameworks to add as much tools to my toolbox
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
