import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface SkillItemProps {
    Icon?: FC;
    children?: ReactNode;
    href?: string;
    iconImage?: StaticImageData;
}

export default function SkillItem(props: SkillItemProps) {
    const { Icon } = props;
    return (
        <a
            className={"group flex h-14 gap-2 rounded-xl bg-neutral-900 p-2"}
            href={props.href}
            target={"_blank"}
        >
            <div className={"flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-950 p-2"}>
                <div className={"basis-full"}>
                    {Icon && <Icon />}
                    {props.iconImage && (
                        <Image
                            src={props.iconImage}
                            alt={"icon"}
                        />
                    )}
                </div>
            </div>
            <div className={"flex h-full items-center pr-1 group-hover:text-lime-500"}>{props.children}</div>
        </a>
    );
}
