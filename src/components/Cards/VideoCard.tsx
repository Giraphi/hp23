import { ReactNode } from "react";
import CardAppear from "@/components/Cards/CardAppear";
import Link from "next/link";
import IconButton from "../IconButton";
import GithubIcon from "@/assets/github.svg";
import CodesandboxIcon from "@/assets/codesandbox.svg";

export interface VideoCardProps {
    videoName: string;
    headline: string;
    children: ReactNode;
    codesandBoxLink: string;
    githubLink: string;
}

export default function VideoCard(props: VideoCardProps) {
    return (
        <CardAppear
            className={
                "flex w-full max-w-md flex-col items-start gap-4 rounded-2xl bg-neutral-950 p-4 md:p-8 lg:text-base xxl:gap-8 xxl:text-xl"
            }
        >
            <Link
                href={props.codesandBoxLink}
                target="_blank"
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
            </Link>
            <h3 className={"font-bold"}>{props.headline}</h3>
            <p className={"text-neutral-300"}>{props.children}</p>
            <div className="mt-auto flex flex-wrap gap-4">
                <IconButton
                    className={"inline-flex bg-neutral-800 text-white"}
                    Icon={CodesandboxIcon}
                    href={props.codesandBoxLink}
                >
                    CodeSandbox
                </IconButton>
                <IconButton
                    className={"inline-flex bg-neutral-800 text-white"}
                    Icon={GithubIcon}
                    href={props.githubLink}
                >
                    GitHub
                </IconButton>
            </div>
        </CardAppear>
    );
}
