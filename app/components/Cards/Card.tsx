import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import CardAppear from "@/app/components/Cards/CardAppear";

export interface CardProps {
    image: StaticImageData;
    headline: string;
    children: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <CardAppear className={"flex w-full max-w-md flex-col gap-4 rounded-2xl bg-gray-1 p-4 md:p-8 lg:text-base xl:gap-8 xl:text-xl"}>
            <div className={"relative z-20 aspect-image overflow-hidden rounded-xl"}>
                <Image
                    quality={90}
                    src={props.image}
                    alt={"project picture"}
                    fill={true}
                    className={"object-cover"}
                    sizes={"400px"}
                />
            </div>
            <h3 className={"font-bold"}>{props.headline}</h3>
            <p className={"text-gray-c"}>{props.children}</p>
        </CardAppear>
    );
}
