"use client";

import React from "react";
import Intro from "@/app/components/Sections/Intro/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import usePointerStoreHandler from "@/app/store/usePointerStoreHandler";
import Projects from "@/app/components/Sections/Projects/Projects";
import Skills from "@/app/components/Sections/Skills/Skills";
import CodeExamples from "@/app/components/Sections/CodeExamples/CodeExamples";

export default function Home() {
    useDeviceStoreHandler();
    usePointerStoreHandler();

    return (
        <main>
            {/*<Puzzle />*/}
            {/*<DotsRow />*/}
            {/*<Cover />*/}

            {/*start to float when top edge is 200vh above viewport. Since Intro has a height of 300vh this is*/}
            {/*exactly when bottom edge meets bottom of viewport*/}
            {/*Can't use bottom:0 here, because that makes element float as long as bottom edge is below viewport.*/}
            <div className={`sticky top-[-200lvh] lg:static`}>
                <Intro />
            </div>
            <div className={"relative border-t-2 border-gray-4 lg:static lg:border-none"}>
                <Projects />
                <Skills />
                <CodeExamples />
            </div>
        </main>
    );
}
