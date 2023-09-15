"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import CardAppear from "@/src/components/Cards/CardAppear";

export interface CardProps {
    image: StaticImageData;
    headline: string;
    children: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <CardAppear
            className={
                "group flex w-full max-w-md cursor-pointer flex-col gap-4 rounded-2xl bg-gray-1 p-4 md:p-8 lg:text-base xl:gap-8 xl:text-xl"
            }
        >
            <div className={"relative z-20 aspect-image overflow-hidden rounded-xl"}>
                <Image
                    quality={90}
                    src={props.image}
                    alt={"project picture"}
                    fill={true}
                    className={"object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"}
                    sizes={"400px"}
                />
            </div>
            <h3 className={"font-bold"}>{props.headline}</h3>
            <p className={"text-gray-c"}>{props.children}</p>
        </CardAppear>
    );
}
