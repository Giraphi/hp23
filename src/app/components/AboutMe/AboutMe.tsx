import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import SectionHeadline from "@/src/components/SectionHeadline";
import HeadlineWText from "@/src/components/HeadlineWText";
import InlineTextLink from "@/src/components/InlineTextLink";
import { SectionId } from "@/src/store/useActiveSectionStore";
import ScrollTarget from "@/src/components/ScrollTarget";
import Section from "@/src/components/Section";

export interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
    return (
        <Section sectionId={SectionId.aboutMe}>
            <SectionBackground>
                <ScrollTarget id={SectionId.aboutMe} />

                <SectionGrid className={"relative z-10"}>
                    <div className={"col-content"}>
                        <SectionHeadline>About Me</SectionHeadline>
                    </div>
                    <div className={"col-content xl:col-text"}>
                        <HeadlineWText
                            headline={"Education"}
                            classname={"pb-8"}
                        >
                            <div className={"grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-2"}>
                                <div className={"pr-8 font-bold"}>2011 - 2014:</div>
                                <div className={"pb-4 text-gray-c md:pb-0"}> Bachelor of Computer Science at TU Dresden</div>
                                <div className={"pr-8 font-bold"}>2014/15:</div>
                                <div className={"pb-4 text-gray-c md:pb-0"}>Study of Architecture at TU Dresden</div>
                                <div className={"pr-8 font-bold"}>2015 - 2018:</div>
                                <div className={"text-gray-c"}>
                                    Master of Computational Linguistics at LMU Munich with Computer Science as minor subject. Master Thesis
                                    in the field of Artificial Intelligence.
                                </div>
                            </div>
                        </HeadlineWText>

                        <HeadlineWText
                            headline={"Employments"}
                            classname={"pb-8"}
                        >
                            <div className={"grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-2"}>
                                <div className={"pr-8 font-bold"}>2012 - 2018:</div>
                                <div className={"pb-4 text-gray-c md:pb-0"}>
                                    Different Jobs as academic tutor at TU Dresden and LMU Munich
                                </div>
                                <div className={"pr-8 font-bold"}>2016 - 2018:</div>
                                <div className={"pb-4 text-gray-c md:pb-0"}>
                                    Working student jobs in Munich at Siemens and at the robotics startup{" "}
                                    <InlineTextLink
                                        target={"_blank"}
                                        href={"https://www.magazino.eu/"}
                                    >
                                        Magazino
                                    </InlineTextLink>
                                    .
                                </div>
                                <div className={"pr-8 font-bold"}>Since 2018:</div>
                                <div className={"text-gray-c"}>
                                    Full time frontend developer at the web agency{" "}
                                    <InlineTextLink
                                        href={"https://funct.com/"}
                                        target={"_blank"}
                                    >
                                        funct
                                    </InlineTextLink>{" "}
                                    in Munich. Development of Websites, Web Apps and Desktop Apps in close collaboration with different
                                    design teams.
                                </div>
                            </div>
                        </HeadlineWText>

                        <HeadlineWText headline={"Interests"}>
                            <div className={"pb-1 text-gray-c md:pb-2"}>Art / Digital Art / Design</div>
                            <div className={"pb-1 text-gray-c md:pb-2"}>
                                Synthesizer at my band{" "}
                                <InlineTextLink
                                    href={"https://www.ubu-imperator.com/"}
                                    target={"_blank"}
                                >
                                    Ubu Imperator
                                </InlineTextLink>
                            </div>
                            <div className={"text-gray-c"}>Modular synthesizers / electronic music</div>
                        </HeadlineWText>
                    </div>
                </SectionGrid>
            </SectionBackground>
        </Section>
    );
}
