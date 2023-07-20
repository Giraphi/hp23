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
            <div className={"h-16"}>
                <Eye className={"h-full"} />
            </div>
            <h1 className={`text-center font-sans text-5xl font-bold`}>Scroll</h1>
            <div className={"h-16"}></div>
        </div>
    );
}
