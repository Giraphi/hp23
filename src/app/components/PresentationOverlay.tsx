import OverlayTextArea from "@/src/components/OverlayTextArea";
import SectionHeadline from "@/src/components/SectionHeadline";
import InlineTextLink from "@/src/components/InlineTextLink";
import Image from "next/image";
import UnorderedList from "@/src/components/UnorderedList";
import iceberg from "@/src/assets/3d-presentation/iceberg.png";
import deepView from "@/src/assets/3d-presentation/deep-view.png";
import VideoPlayer from "@/src/components/VideoPlayer";
import OverlayPage from "@/src/components/OverlayPage/OverlayPage";
import React from "react";

export interface PresentationOverlayProps {}

export default function PresentationOverlay(props: PresentationOverlayProps) {
    return (
        <OverlayPage>
            <OverlayTextArea>
                <SectionHeadline className={"leading-tight md:leading-tight xxl:leading-tight"}>3D Presentation Website</SectionHeadline>

                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <p className={"pb-4 md:pb-8"}>
                    On this presentation website I’ve implemented a 3D interactive based on the design and 3D Model by{" "}
                    <InlineTextLink
                        href={"https://www.michaelflynnbost.com/"}
                        target={"_blank"}
                    >
                        Michael Flynn Bost
                    </InlineTextLink>
                    . The site is used internally by a large consulting group. Unfortunately, for legal reasons the client’s name can’t be
                    named explicitly.
                </p>
                <div className={"relative aspect-screenshot w-full overflow-hidden rounded-xl"}>
                    <Image
                        quality={90}
                        src={iceberg}
                        alt={"iceberg picture"}
                        fill={true}
                        className={"object-cover object-top"}
                        sizes={"1000px"}
                    />
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Project Requirements</h3>
                <UnorderedList className={"pb-4 md:pb-8"}>
                    <li>Create an interactive 3D scene that works smoothly in the browser</li>
                    <li>Close collaboration with the 3D artist</li>
                </UnorderedList>

                <div className={"relative mb-2 aspect-screenshot w-full overflow-hidden rounded-xl md:mb-4"}>
                    <Image
                        quality={90}
                        src={deepView}
                        alt={"iceberg deep view picture"}
                        fill={true}
                        className={"object-cover object-top"}
                        sizes={"1000px"}
                    />
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>My Tasks</h3>
                <UnorderedList className={"pb-2 md:pb-4"}>
                    <li></li>
                </UnorderedList>

                <VideoPlayer
                    mp4={"/3d-presentation/3d-presentation.mp4"}
                    webm={"/3d-presentation/3d-presentation.webm"}
                    poster={"/3d-presentation/3d-presentation.webp"}
                />
            </OverlayTextArea>
        </OverlayPage>
    );
}
