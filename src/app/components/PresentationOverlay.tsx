import OverlayTextArea from "@/components/OverlayTextArea";
import SectionHeadline from "@/components/SectionHeadline";
import InlineTextLink from "@/components/InlineTextLink";
import Image from "next/image";
import UnorderedList from "@/components/UnorderedList";
import iceberg from "@/assets/3d-presentation/iceberg.png";
import deepView from "@/assets/3d-presentation/deep-view.png";
import VideoPlayer from "@/components/VideoPlayer";
import OverlayPage from "@/components/OverlayPage/OverlayPage";
import React from "react";

export interface PresentationOverlayProps {}

export default function PresentationOverlay(props: PresentationOverlayProps) {
    return (
        <OverlayPage>
            <OverlayTextArea>
                <SectionHeadline className={"leading-tight md:leading-tight xxl:leading-tight"}>3D Presentation Website</SectionHeadline>

                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <p className={"pb-4 md:pb-8"}>
                    For this website I’ve implemented an interactive 3D scene based on the design and 3D model by the 3D and video artist{" "}
                    <InlineTextLink
                        href={"https://www.michaelflynnbost.com/"}
                        target={"_blank"}
                    >
                        Michael Flynn Bost
                    </InlineTextLink>
                    . <br /> The site is used by a large consulting group internally for presentational purpose. More about that on request.
                </p>
                <div className={"relative aspect-screenshot w-full overflow-hidden rounded"}>
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
                    <li>Create an interactive 3D scene that works smoothly in the browser.</li>
                    <li>Conceptualize and implement the UI and camera animations.</li>
                    <li>Collaborate closely with the 3D artist</li>
                </UnorderedList>

                <div className={"relative mb-2 aspect-screenshot w-full overflow-hidden rounded md:mb-4"}>
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

            <OverlayTextArea disableSpace={true}>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>What I did in detail</h3>
                <UnorderedList className={"pb-2 md:pb-4"}>
                    <li>
                        Set up a development pipeline to convert the 3D scene from Cinema4D into web format (
                        <InlineTextLink
                            target={"_blank"}
                            href={"https://en.wikipedia.org/wiki/GlTF"}
                        >
                            gltf
                        </InlineTextLink>
                        ).
                    </li>
                    <li>
                        Implement an app based on{" "}
                        <InlineTextLink
                            target={"_blank"}
                            href={"https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"}
                        >
                            react-three-fiber
                        </InlineTextLink>{" "}
                        that can render the scene, take control over camera movement and render text on top of it.
                    </li>
                    <li>
                        Conceptualize and implement animations and user interactions with{" "}
                        <InlineTextLink
                            target={"_blank"}
                            href={"https://www.framer.com/motion/three-introduction/"}
                        >
                            framer-motion-3d
                        </InlineTextLink>
                        .
                    </li>
                    <li>Embed the app as a sub-page into a larger site managed by a CMS system.</li>
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
