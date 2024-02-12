import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import CardAppear from "@/components/Cards/CardAppear";
import Link from "next/link";
import GlitchText from "../GlitchText/GlitchText";
import colors from "tailwindcss/colors";
import IconButton from "../IconButton";

export interface CardProps {
    image: StaticImageData;
    headline: string;
    children: ReactNode;
    href: string;
}

export default function Card(props: CardProps) {
    return (
        <CardAppear className={"w-full max-w-md"}>
            <div
                className={
                    "flex h-full flex-col items-start gap-4 rounded-2xl bg-neutral-950 p-4 md:p-8 lg:text-base xxl:gap-8 xxl:text-xl"
                }
            >
                <Link
                    href={props.href}
                    className={"group flex w-full flex-col gap-4"}
                    prefetch={true}
                >
                    <div className={"relative z-20 aspect-image overflow-hidden rounded-xl"}>
                        <Image
                            quality={90}
                            src={props.image}
                            alt={"card picture"}
                            fill={true}
                            className={"cursor-pointer object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"}
                            sizes={"400px"}
                        />
                    </div>
                    <h3 className={"font-bold"}>{props.headline}</h3>
                </Link>
                <p className={"text-neutral-300"}>{props.children}</p>

                <IconButton
                    href={props.href}
                    className=" mt-auto bg-neutral-800"
                >
                    <GlitchText bgColor={colors.neutral[800]}>Read more</GlitchText>
                </IconButton>
            </div>
        </CardAppear>
    );
}
