import OverlayPage from "@/components/OverlayPage/OverlayPage";
import OverlayTextArea from "@/components/OverlayTextArea";
import SectionHeadline from "@/components/SectionHeadline";
import React from "react";
import Image from "next/image";
import screenshot1 from "@/assets/ubu/ubu-screenshot.png";
import screenshot2 from "@/assets/ubu/ubu-screenshot2.png";
import screenshot3 from "@/assets/ubu/ubu-screenshot3.png";
import VideoPlayer from "@/components/VideoPlayer";
import InlineTextLink from "@/components/InlineTextLink";
import IconButton from "@/components/IconButton";
import GithubIcon from "@/assets/github.svg";
import UnorderedList from "@/components/UnorderedList";

export interface UbuOverlayProps {}

export default function UbuOverlay(props: UbuOverlayProps) {
    return (
        <OverlayPage>
            <OverlayTextArea>
                <SectionHeadline className={"leading-tight md:leading-tight xxl:leading-tight"}>
                    Website for my band Ubu Imperator
                </SectionHeadline>
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Overview</h3>

                <p className={"pb-4 md:pb-8"}>
                    Making music together with my band is a very important part of my life and therefore I was very excited and motivated to
                    create a website for us :)
                </p>

                <p className={"pb-4 md:pb-8"}>
                    Luckily, our drummer is a very good illustrator, so it was clear that his drawings would be an essential part of the
                    site. I decided for a simple layout and spiced up everything with some color animations and bold visuals.
                </p>

                <p className={"pb-4"}>
                    Live Site:{" "}
                    <InlineTextLink
                        href={"https://www.ubu-imperator.com/"}
                        target={"_blank"}
                    >
                        ubu-imperator.com
                    </InlineTextLink>
                </p>

                <div className={"flex items-center gap-2 pb-8"}>
                    <p>Full Code:</p>
                    <IconButton
                        className={"text-white"}
                        Icon={GithubIcon}
                        href={"https://github.com/Giraphi/ubu"}
                    >
                        GitHub
                    </IconButton>
                </div>

                <div className={"aspect-video overflow-hidden rounded"}>
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
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>Project Requirements</h3>
                <UnorderedList className={"pb-4 md:pb-8"}>
                    <li>Design and implement a unique, mobile first and SEO optimized band site.</li>
                    <li>
                        The site should be our band&rsquo;s main portfolio to introduce us and our music to audience and concert organisers.
                    </li>
                    <li>Collaborate with our illustrator to make best use of his illustrations.</li>
                </UnorderedList>
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
                <h3 className={"pb-2 font-bold text-pink-600 md:pb-4"}>What I did in detail</h3>
                <UnorderedList className={"pb-4 md:pb-8"}>
                    <li>Wireframe a site skeleton and write all text content.</li>
                    <li>Select and organize media like fotos, videos and of course music.</li>
                    <li>Create a website design based on clean layout, color animations and illustrations</li>
                    <li>
                        Implement the site using{" "}
                        <InlineTextLink
                            href={"https://react.dev/"}
                            target={"_blank"}
                        >
                            react.js
                        </InlineTextLink>{" "}
                        and{" "}
                        <InlineTextLink
                            href={"https://nextjs.org/"}
                            target={"_blank"}
                        >
                            next.js
                        </InlineTextLink>{" "}
                        and host it on{" "}
                        <InlineTextLink
                            href={"https://vercel.com/"}
                            target={"_blank"}
                        >
                            Vercel
                        </InlineTextLink>
                        .
                    </li>
                </UnorderedList>

                <VideoPlayer
                    mp4={"/ubu/ubu-full.mp4"}
                    webm={"/ubu/ubu-full.webm"}
                    poster={"/ubu/ubu-placeholder.webp"}
                />
            </OverlayTextArea>
        </OverlayPage>
    );
}
