import React from "react";
import Puzzle from "@/app/components/CodeExamples/Puzzle/Puzzle";

export interface PageProps {}

export default function Page(props: PageProps) {
    return (
        <div className={"h-[100lvh] bg-gradient-to-b from-gray-3 to-gray-1"}>
            <Puzzle />
        </div>
    );
}
