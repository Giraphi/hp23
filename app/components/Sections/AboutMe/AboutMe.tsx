import React from "react";
import Section from "@/app/components/Section";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import HeadlineWText from "@/app/components/HeadlineWText";
import TextLink from "@/app/components/TextLink";

export interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
    return (
        <Section>
            <SectionGrid>
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
                                Master of Computational Linguistics at LMU Munich with Computer Science as minor subject. Master Thesis in
                                the field of Artificial Intelligence.
                            </div>
                        </div>
                    </HeadlineWText>

                    <HeadlineWText
                        headline={"Employments"}
                        classname={"pb-8"}
                    >
                        <div className={"grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-2"}>
                            <div className={"pr-8 font-bold"}>2012 - 2018:</div>
                            <div className={"pb-4 text-gray-c md:pb-0"}>Different Jobs as academic tutor at TU Dresden and LMU Munich</div>
                            <div className={"pr-8 font-bold"}>2016 - 2018:</div>
                            <div className={"pb-4 text-gray-c md:pb-0"}>
                                Working student jobs in Munich at Siemens and at the robotics startup{" "}
                                <TextLink
                                    target={"_blank"}
                                    href={"https://www.magazino.eu/"}
                                >
                                    Magazino
                                </TextLink>
                                .
                            </div>
                            <div className={"pr-8 font-bold"}>Since 2018:</div>
                            <div className={"text-gray-c"}>
                                Full time frontend developer at the web agency{" "}
                                <TextLink
                                    href={"https://funct.com/"}
                                    target={"_blank"}
                                >
                                    funct
                                </TextLink>{" "}
                                in Munich. Development of Websites, Web Apps and Desktop Apps in close collaboration with different design
                                teams.
                            </div>
                        </div>
                    </HeadlineWText>

                    <HeadlineWText headline={"Interests"}>
                        <div className={"pb-1 text-gray-c md:pb-2"}>Art / Digital Art / Design</div>
                        <div className={"pb-1 text-gray-c md:pb-2"}>
                            Synthesizer at my band{" "}
                            <TextLink
                                href={"https://www.ubu-imperator.com/"}
                                target={"_blank"}
                            >
                                Ubu Imperator
                            </TextLink>
                        </div>
                        <div className={"text-gray-c"}>Modular synthesizers / electronic music</div>
                    </HeadlineWText>
                </div>
            </SectionGrid>
        </Section>
    );
}
