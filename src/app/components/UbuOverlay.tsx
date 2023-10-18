import OverlayPage from "@/components/OverlayPage/OverlayPage";
import OverlayTextArea from "@/components/OverlayTextArea";
import SectionHeadline from "@/components/SectionHeadline";
import React from "react";
import Image from "next/image";
import screenshot1 from "@/assets/ubu/ubu-screenshot.png";
import screenshot2 from "@/assets/ubu/ubu-screenshot2.png";
import screenshot3 from "@/assets/ubu/ubu-screenshot3.png";
import VideoPlayer from "@/components/VideoPlayer";

export interface UbuOverlayProps {}

export default function UbuOverlay(props: UbuOverlayProps) {
    return (
        <OverlayPage>
            <OverlayTextArea>
                <SectionHeadline className={"leading-tight md:leading-tight xxl:leading-tight"}>
                    Website for my band Ubu Imperator
                </SectionHeadline>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <div className={"aspect-video overflow-hidden rounded-xl"}>
                    <video
                        className={"h-full w-full max-w-none object-cover"}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        autoPlay={true}
                        poster={`/ubu/ubu-placeholder.webp`}
                    >
                        <source src={`/ubu/ubu-start.webm`} />
                        <source src={`/ubu/ubu-start.mp4`} />
                    </video>
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <div className={"flex flex-col items-center gap-4 md:gap-6 lg:flex-row lg:items-stretch lg:gap-8"}>
                    <div className={"relative w-full max-lg:w-56"}>
                        <Image
                            quality={90}
                            src={screenshot1}
                            alt={"card picture"}
                            className={"rounded-xl "}
                            sizes={"300px"}
                        />
                    </div>
                    <div className={"relative w-full max-lg:w-56"}>
                        <Image
                            quality={90}
                            src={screenshot2}
                            alt={"card picture"}
                            className={"rounded-xl"}
                            sizes={"300px"}
                        />
                    </div>
                    <div className={"relative w-full max-lg:w-56"}>
                        <Image
                            quality={90}
                            src={screenshot3}
                            alt={"card picture"}
                            className={"rounded-xl object-contain"}
                            sizes={"300px"}
                        />
                    </div>
                </div>
            </OverlayTextArea>

            <OverlayTextArea>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>
                <VideoPlayer
                    mp4={"/ubu/ubu-full.mp4"}
                    webm={"/ubu/ubu-full.webm"}
                    poster={"/ubu/ubu-placeholder.webp"}
                />
            </OverlayTextArea>
        </OverlayPage>
    );
}
