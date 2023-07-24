import React, { ReactNode } from "react";

export interface TextCardProps {
    headline: string;
    children: ReactNode;
    classname?: string;
}

export default function HeadlineWText(props: TextCardProps) {
    return (
        <div className={props.classname}>
            <h3 className={"pb-4 font-bold text-pink"}>{props.headline}</h3>
            <div className={"rounded-2xl bg-black p-4 md:p-8"}>{props.children}</div>
        </div>
    );
}
