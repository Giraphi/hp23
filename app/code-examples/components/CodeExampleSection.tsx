import React, { FC, ReactNode } from "react";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionText from "@/app/components/SectionText";
import SectionParagraph from "@/app/components/SectionParagraph";
import IconButton from "@/app/components/IconButton";
import GithubIcon from "@/app/assets/github.svg";
import CodesandboxIcon from "@/app/assets/codesandbox.svg";
import Headline from "@/app/components/Headline";

export interface CodeExampleSectionProps {
    githubLink?: string;
    codesandboxLink?: string;
    DemoComponent: FC;
    children: ReactNode;
    headline: string;
}

export default function CodeExampleSection(props: CodeExampleSectionProps) {
    const { DemoComponent } = props;

    return (
        <>
            <SectionBackground startDark={true}>
                <SectionGrid className={"pb-0 lg:pb-0"}>
                    <SectionText className={"pb-0 lg:pb-0"}>
                        <Headline className={"pb-6 lg:pb-8"}>{props.headline}</Headline>
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
                    <div className={"col-content"}>
                        <DemoComponent />
                    </div>
                </SectionGrid>
            </SectionBackground>
        </>
    );
}
