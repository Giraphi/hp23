"use client";

import React from "react";
import Eye from "./eye.svg";

export interface CoverContentProps {
    mask?: boolean;
    className?: string;
}

export default function CoverContent(props: CoverContentProps) {
    return (
        <div className={`flex h-full flex-col items-center justify-center bg-black text-white`}>
            <div className={"h-16 md:h-24 lg:h-28"}>
                <Eye className={"h-full"} />
            </div>
            <h1
                className={`text-center font-sans text-4xl font-bold md:text-6xl lg:text-7xl`}
                style={{ fontFamily: "var(--font-bungee)" }}
            >
                Scroll
            </h1>
            <div className={"h-16 md:h-24 lg:h-28"}></div>
        </div>
    );
}
