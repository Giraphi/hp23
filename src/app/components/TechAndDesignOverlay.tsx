import Link from "next/link";
import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import OverlayTopBar from "@/src/components/OverlayPage/OverlayTopBar";
import OverlayPage from "@/src/components/OverlayPage/OverlayPage";
import SectionHeadline from "@/src/components/SectionHeadline";
import SectionText from "@/src/components/SectionText";
import SectionParagraph from "@/src/components/SectionParagraph";
import React from "react";
import UnorderedList from "@/src/components/UnorderedList";

export interface TechAndDesignOverlayProps {}

export default function TechAndDesignOverlay(props: TechAndDesignOverlayProps) {
    return (
        <OverlayPage>
            <SectionText>
                <SectionHeadline>Homepage for a tech and design unit of a large consulting group</SectionHeadline>

                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <SectionParagraph>
                    In this project, I’ve implemented a react.js frontend based on the designs by the Italian studio Vicine. The content is
                    controlled by a wordpress-based headless CMS. Unfortunately, for legal reasons the client’s name can’t be named
                    explicitly.
                </SectionParagraph>
            </SectionText>

            <SectionText>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Project Requirements</h3>
                <UnorderedList>
                    <li>Analyze content structure and setup a data structure to be controlled by a headless CMS</li>
                    <li>Implementation of a fast, secure, robust and responsive react.js frontend</li>
                    <li>
                        Page layout needs to be stable enough to deal with content changes, which can happen at any time through the CMS
                    </li>
                    <li>
                        Carefully stick to the design specifications and support the design team with open points like mobile optimizations,
                        UX concerns and animation.
                    </li>
                    <li>SEO optimizations, including Server-side-rendering</li>
                </UnorderedList>
            </SectionText>

            <SectionText>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>My Tasks</h3>
                <UnorderedList>
                    <li>Set up the frontend tech stack, selection of required technologies and frameworks</li>
                    <li>Plan and implement communication to the headless CMS</li>
                    <li>Write most parts of the react.js frontend code</li>
                    <li>Close collaboration with the design team to optimize design decisions</li>
                    <li>Design and implementation of animated user interactions.</li>
                </UnorderedList>
            </SectionText>
        </OverlayPage>
    );
}
