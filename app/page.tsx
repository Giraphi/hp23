"use client";

import React from "react";
import Intro from "@/app/components/Sections/Intro/Intro";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import usePointerStoreHandler from "@/app/store/usePointerStoreHandler";
import Projects from "@/app/components/Sections/Projects/Projects";
import Skills from "@/app/components/Sections/Skills/Skills";
import CodeExamples from "@/app/components/Sections/CodeExamples/CodeExamples";
import { MotionConfig } from "framer-motion";
import AboutMe from "@/app/components/Sections/AboutMe/AboutMe";
import WavesBackground from "@/app/components/Sections/AboutMe/WavesBackground/WavesBackground";
import Footer from "@/app/components/Sections/Footer/Footer";

export default function Home() {
    useDeviceStoreHandler();
    usePointerStoreHandler();

    return (
        <main>
            <MotionConfig>
                {/*<Puzzle />*/}
                {/*<DotsRow />*/}
                {/*<Cover />*/}

                {/*start to float when top edge is 200vh above viewport. Since Intro has a height of 300vh this is*/}
                {/*exactly when bottom edge meets bottom of viewport*/}
                {/*Can't use bottom:0 here, because that makes element float as long as bottom edge is below viewport.*/}
                <Intro />

                {/*<div className={"fixed bottom-0"}>*/}
                {/*    <Grid>*/}
                {/*        <ScrollHint />*/}
                {/*    </Grid>*/}
                {/*</div>*/}

                <Projects />
                <Skills />
                <CodeExamples />
                <WavesBackground>
                    <AboutMe />
                </WavesBackground>
                <Footer />
            </MotionConfig>
        </main>
    );
}
