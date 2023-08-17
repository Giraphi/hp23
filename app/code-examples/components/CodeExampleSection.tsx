"use client";
import React, { FC, ReactNode, useRef } from "react";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionText from "@/app/components/SectionText";
import SectionParagraph from "@/app/components/SectionParagraph";
import IconButton from "@/app/components/IconButton";
import GithubIcon from "@/app/assets/github.svg";
import CodesandboxIcon from "@/app/assets/codesandbox.svg";
import useNavigationSection from "@/app/hooks/useNavigationSection";
import { SectionId } from "@/app/store/useActiveSectionStore";
import ScrollTarget from "@/app/components/ScrollTarget";

export interface CodeExampleSectionProps {
    githubLink?: string;
    codesandboxLink?: string;
    DemoComponent: FC;
    children: ReactNode;
    headline: string;
    sectionId: SectionId;
}

export default function CodeExampleSection(props: CodeExampleSectionProps) {
    const { DemoComponent } = props;
    const sectionRef = useRef(null);
    useNavigationSection(sectionRef, props.sectionId);

    return (
        <>
            <ScrollTarget id={props.sectionId} />
            <SectionBackground
                startDark={true}
                ref={sectionRef}
            >
                <SectionGrid className={"pb-0 lg:pb-0"}>
                    <SectionText className={"pb-0 lg:pb-0"}>
                        <h2 className={"pb-6 font-delaGothicOne text-3xl lg:pb-8"}>{props.headline}</h2>
                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Code</h3>
                        <SectionParagraph className={"pb-2"}>Find the code for this component on:</SectionParagraph>
                        <div className={"inline-flex flex-wrap gap-2 pb-6 lg:pb-8"}>
                            <IconButton
                                className={"text-white"}
                                Icon={GithubIcon}
                                href={props.githubLink}
                            >
                                GitHub
                            </IconButton>
                            <IconButton
                                className={"text-white"}
                                Icon={CodesandboxIcon}
                                href={props.codesandboxLink}
                            >
                                CodeSandbox
                            </IconButton>
                        </div>
                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Idea</h3>
                        {props.children}

                        <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Demo</h3>
                    </SectionText>
                </SectionGrid>
            </SectionBackground>

            <SectionBackground>
                <SectionGrid className={"pt-0"}>
                    <SectionText>
                        <DemoComponent />
                    </SectionText>
                </SectionGrid>
            </SectionBackground>
        </>
    );
}
