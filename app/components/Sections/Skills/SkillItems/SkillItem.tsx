import React, { ReactNode } from "react";

export interface SkillItemProps {
    Icon: React.FC;
    children?: ReactNode;
    href?: string;
}

export default function SkillItem(props: SkillItemProps) {
    const { Icon } = props;
    return (
        <a
            className={"flex h-14 gap-2 rounded-xl bg-gray-2 p-2"}
            href={props.href}
            target={"_blank"}
        >
            <div className={"flex aspect-square items-center justify-center rounded-lg bg-gray-1 p-2"}>
                <Icon />
            </div>
            <div className={"flex h-full items-center pr-1"}>{props.children}</div>
        </a>
    );
}
