import OverlayPage from "@/components/OverlayPage/OverlayPage";
import SectionHeadline from "@/components/SectionHeadline";
import React from "react";
import UnorderedList from "@/components/UnorderedList";
import InlineTextLink from "@/components/InlineTextLink";
import OverlayTextArea from "@/components/OverlayTextArea";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import mobileScreenshot from "@/assets/tech-and-design/mobile-screenshot.png";
import mobileScreenshot2 from "@/assets/tech-and-design/mobile-screenshot-2.png";
import mobileScreenshot3 from "@/assets/tech-and-design/mobile-screenshot-3.png";
import filterScreenshot from "@/assets/tech-and-design/filter-screenshot.png";

export interface TechAndDesignOverlayProps {}

export default function TechAndDesignOverlay(props: TechAndDesignOverlayProps) {
    return (
        <OverlayPage>
            <OverlayTextArea>
                <SectionHeadline className={"leading-tight md:leading-tight xxl:leading-tight"}>
                    Homepage for a tech and design team
                </SectionHeadline>

                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <p className={"pb-4"}>
                    In this project, I’ve implemented a react.js frontend for a Homepage of a tech and design team based on the designs by
                    the Italian studio{" "}
                    <InlineTextLink
                        target={"_blank"}
                        href={"https://vicinedesign.com/"}
                    >
                        Vicine
                    </InlineTextLink>
                    .
                </p>
                <p className={"pb-4 md:pb-8"}>
                    The content is controlled by headless CMS. Unfortunately, for legal reasons the site URL and the client’s name can’t be
                    named explicitly. More about that on request.
                </p>
                <div className={"flex flex-col items-center gap-4 md:gap-6 lg:flex-row lg:items-stretch lg:gap-8"}>
                    <div className={"relative w-56 lg:w-72"}>
                        <Image
                            quality={90}
                            src={mobileScreenshot}
                            alt={"card picture"}
                            className={"rounded-xl "}
                            sizes={"300px"}
                        />
                    </div>
                    <div className={"relative w-56 lg:w-72"}>
                        <Image
                            quality={90}
                            src={mobileScreenshot2}
                            alt={"card picture"}
                            className={"rounded-xl"}
                            sizes={"300px"}
                        />
                    </div>
                    <div className={"relative w-56 lg:w-72"}>
                        <Image
                            quality={90}
                            src={mobileScreenshot3}
                            alt={"card picture"}
                            className={"rounded-xl object-contain"}
                            sizes={"300px"}
                        />
                    </div>
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Project Requirements</h3>
                <UnorderedList className={"pb-4 md:pb-8"}>
                    <li>Analyze content structure and setup a data concept to be controlled by a headless CMS.</li>
                    <li>Implementation of a fast, secure, robust and responsive react.js frontend.</li>
                    <li>
                        Page layout needs to be stable enough to deal with content changes, which can happen at any time through the CMS.
                    </li>
                    <li>
                        Carefully stick to the design specifications and support the design team with open points like mobile optimizations,
                        UX concerns and animation.
                    </li>
                    <li>SEO optimizations, including Server-side-rendering.</li>
                </UnorderedList>

                <div className={"relative mb-2 aspect-screenshot w-full overflow-hidden rounded md:mb-4"}>
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

            <OverlayTextArea disableSpace={true}>
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
                        Collaborate closely with the design team to optimize design decisions also from a technical perspective. Implement
                        styling system with{" "}
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
                        .
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
