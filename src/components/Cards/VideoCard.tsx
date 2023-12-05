import { ReactNode } from "react";
import CardAppear from "@/components/Cards/CardAppear";
import Link from "next/link";

export interface VideoCardProps {
    videoName: string;
    headline: string;
    children: ReactNode;
    href: string;
}

export default function VideoCard(props: VideoCardProps) {
    return (
        <Link
            href={props.href}
            target="_blank"
        >
            <CardAppear
                className={"flex w-full max-w-md flex-col gap-4 rounded-2xl bg-gray-1 p-4 md:p-8 lg:text-base xxl:gap-8 xxl:text-xl"}
            >
                <div className={"aspect-image overflow-hidden rounded-xl"}>
                    <video
                        className={"h-full w-full max-w-none object-cover"}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        autoPlay={true}
                        poster={`/card-videos/${props.videoName}-placeholder.webp`}
                    >
                        <source src={`/card-videos/${props.videoName}.webm`} />
                        <source src={`/card-videos/${props.videoName}.mp4`} />
                    </video>
                </div>
                <h3 className={"font-bold"}>{props.headline}</h3>
                <p className={"text-gray-c"}>{props.children}</p>
            </CardAppear>
        </Link>
    );
}
