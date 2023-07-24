import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface VideoCardProps {
    videoName: string;
    headline: string;
    children: ReactNode;
}

export default function VideoCard(props: VideoCardProps) {
    return (
        <div className={"flex w-full max-w-md flex-col gap-4 rounded-2xl bg-black p-4 md:p-8 lg:text-base xl:gap-8 xl:text-xl"}>
            <div className={"aspect-image overflow-hidden rounded-xl"}>
                <video
                    className={"h-full w-full max-w-none object-cover"}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    autoPlay={true}
                    poster={`/videos/${props.videoName}-placeholder.webp`}
                >
                    <source src={`/videos/${props.videoName}.webm`} />
                    <source src={`/videos/${props.videoName}.mp4`} />
                </video>
            </div>
            <h3 className={"font-bold"}>{props.headline}</h3>
            <p className={"text-gray-c"}>{props.children}</p>
        </div>
    );
}
