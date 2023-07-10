"use client";

import React from "react";
import ScrollHint from "./ScrollHint";
// import Logo from "./funct.svg";

export interface CoverContentProps {
    mask?: boolean;
    className?: string;
}

export default function CoverContent(props: CoverContentProps) {
    return (
        <div
            className={`grid h-full w-full grid-rows-[10vh_1fr_1fr_15vh] bg-black ${props.mask ? " text-white" : "text-white"} ${
                props.className
            }`}
        >
            <div className={"col-start-1 row-start-1 pl-[4vh] pt-[4vh]"}>{/*<Logo style={{ height: "100%" }} />*/}</div>

            <div className={"col-start-1 row-span-2 row-start-2 flex flex-col self-center"}>
                <div className={"flex flex-row items-center"}>
                    <h1
                        className={`basis-2/3 border-r-2 ${
                            props.mask ? "border-black" : "border-fct-dark-green"
                        } py-[1vw] pr-[3vw] text-right text-5xl font-bold`}
                    >
                        Web Design & <br /> Development
                    </h1>
                </div>
            </div>

            <div className={"col-start-1 row-span-1 row-start-3 self-end"}>
                <ScrollHint />
            </div>
        </div>
    );
}
