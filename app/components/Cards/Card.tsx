import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface CardProps {
    image: StaticImageData;
    headline: string;
    children: ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className={"flex w-full max-w-xl flex-col  gap-8 rounded-2xl bg-black p-8"}>
            <div className={"relative aspect-image overflow-hidden rounded-xl"}>
                <Image
                    quality={10}
                    src={props.image.src}
                    alt={"project picture"}
                    fill={true}
                    className={"object-cover"}
                />
            </div>
            <h3 className={"font-bold"}>{props.headline}</h3>
            <p className={"text-gray-b"}>{props.children}</p>
        </div>
    );
}
