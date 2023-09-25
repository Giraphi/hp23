import OverlayPage from "@/src/components/OverlayPage/OverlayPage";
import SectionHeadline from "@/src/components/SectionHeadline";
import React from "react";
import UnorderedList from "@/src/components/UnorderedList";
import InlineTextLink from "@/src/components/InlineTextLink";
import OverlayTextArea from "@/src/components/OverlayTextArea";
import VideoPlayer from "@/src/components/VideoPlayer";
import Image from "next/image";
import mobileScreenshot from "@/src/assets/tech-and-design/mobile-screenshot.png";
import filterScreenshot from "@/src/assets/tech-and-design/filter-screenshot.png";

export interface TechAndDesignOverlayProps {}

export default function TechAndDesignOverlay(props: TechAndDesignOverlayProps) {
    return (
        <OverlayPage>
            <OverlayTextArea>
                <SectionHeadline className={"leading-tight md:leading-tight xxl:leading-tight"}>
                    Homepage for a tech and design team
                </SectionHeadline>

                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <p className={"pb-4 md:pb-8"}>
                    In this project, I’ve implemented a react.js frontend for a Homepage of a tech and design team based on the designs by
                    the Italian studio{" "}
                    <InlineTextLink
                        target={"_blank"}
                        href={"https://vicinedesign.com/"}
                    >
                        Vicine
                    </InlineTextLink>
                    . The content is controlled by headless CMS. Unfortunately, for legal reasons the client’s name can’t be named
                    explicitly. More about that on request.
                </p>
                <div className={"relative w-full max-md:h-96 md:aspect-screenshot "}>
                    <Image
                        quality={90}
                        src={mobileScreenshot}
                        alt={"card picture"}
                        fill={true}
                        className={"rounded-xl object-contain"}
                        sizes={"300px"}
                    />
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Project Requirements</h3>
                <UnorderedList className={"pb-4 md:pb-8"}>
                    <li>Analyze content structure and setup a data concept to be controlled by a headless CMS</li>
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

                <div className={"relative mb-2 aspect-screenshot w-full overflow-hidden rounded-xl md:mb-4"}>
                    <Image
                        quality={90}
                        src={filterScreenshot}
                        alt={"card picture"}
                        fill={true}
                        className={"object-cover object-top"}
                        sizes={"1000px"}
                    />
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>What I did in detail</h3>
                <UnorderedList className={"pb-2 md:pb-4"}>
                    <li>Set up the frontend tech stack, selection of required technologies and frameworks.</li>
                    <li>Plan and implement communication to the headless CMS.</li>
                    <li>
                        Write most parts of the{" "}
                        <InlineTextLink
                            href={"https://react.dev/"}
                            target={"_blank"}
                        >
                            react.js
                        </InlineTextLink>{" "}
                        frontend code.
                    </li>
                    <li>
                        Collaborate closely with the design team to optimize design decisions. Implement styling system with{" "}
                        <InlineTextLink
                            href={"https://styled-components.com/"}
                            target={"_blank"}
                        >
                            styled-components
                        </InlineTextLink>{" "}
                        according to Figma designs.
                    </li>
                    <li>
                        Design and implement animated user interactions. Mostly with{" "}
                        <InlineTextLink
                            target={"_blank"}
                            href={"https://www.framer.com/motion/"}
                        >
                            framer-motion
                        </InlineTextLink>
                    </li>
                </UnorderedList>

                <VideoPlayer
                    mp4={"/tech-and-design/tech-and-design.mp4"}
                    webm={"/tech-and-design/tech-and-design.webm"}
                    poster={"tech-and-design/tech-and-design.webp"}
                />
            </OverlayTextArea>
        </OverlayPage>
    );
}
