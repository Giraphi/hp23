import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import SectionParagraph from "@/app/components/SectionParagraph";
import SectionText from "@/app/components/SectionText";
import SkillItems from "@/app/components/Sections/Skills/SkillItems/SkillItems";

export interface SkillsProps {}

export default function Skills(props: SkillsProps) {
    return (
        <SectionBackground>
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
            </SectionGrid>
        </SectionBackground>
    );
}
