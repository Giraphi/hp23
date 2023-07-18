import React from "react";
import Section from "@/app/components/Section";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import SectionParagraph from "@/app/components/SectionParagraph";

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
    return (
        <Section>
            <SectionGrid>
                <div className={"col-content"}>
                    <SectionHeadline>Skills</SectionHeadline>
                </div>
                <div className={"col-content lg:col-text"}>
                    <SectionParagraph>
                        I believe beeing able to quickly adapt to new technologies is one of the most valueabe skills for developers,
                        especially in the rapidly aternating field of web development.
                    </SectionParagraph>
                    <SectionParagraph>
                        That beeing said, I’m always keen on studying new technologies and frameworks to add as much tools to my toolbox as
                        possible.
                    </SectionParagraph>
                    <SectionParagraph>To name a few, here are some frameworks and technologies I’m currently using a lot:</SectionParagraph>
                </div>
            </SectionGrid>
        </Section>
    );
}
