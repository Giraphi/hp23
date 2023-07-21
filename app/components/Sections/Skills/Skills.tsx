import React from "react";
import Section from "@/app/components/Section";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import SectionParagraph from "@/app/components/SectionParagraph";
import SectionText from "@/app/components/SectionText";
import SkillItems from "@/app/components/Sections/Skills/SkillItems/SkillItems";

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
    return (
        <Section>
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
                        That beeing said, I’m always keen on studying new technologies and frameworks to add as much tools to my toolbox as
                        possible.
                    </SectionParagraph>
                    <SectionParagraph disableSpace={true}>
                        To name a few, here are some frameworks and technologies I’m currently using in my projects:
                    </SectionParagraph>
                </SectionText>

                <div className={"col-content"}>
                    <SkillItems />
                </div>

                {/*<SectionText>*/}
                {/*    <SectionParagraph>*/}
                {/*        I’m used to productive and healthy team work based on Kanban and Scrum concepts while maintaining a clean git*/}
                {/*        history.*/}
                {/*    </SectionParagraph>*/}
                {/*    <SectionParagraph>*/}
                {/*        Besides my technical knowledge, I have a high understanding of modern UI and UX concepts, a lot of experience with*/}
                {/*        Figma, a penchant for motion design and a sharp eye. All of this together helps me to implement even complex project*/}
                {/*        requirements. And I love challenges.*/}
                {/*    </SectionParagraph>*/}
                {/*</SectionText>*/}
            </SectionGrid>
        </Section>
    );
}
