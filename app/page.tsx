"use client";

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
import TopBar from "@/app/components/TopBar";
import { useState } from "react";

export default function Home() {
    useDeviceStoreHandler();
    usePointerStoreHandler();
    const [scrollHintVisible, setScrollHintVisible] = useState(true);

    return (
        <MotionConfig>
            <TopBar visible={!scrollHintVisible} />
            <main>
                <Intro />

                <Projects
                    scrollHintVisible={scrollHintVisible}
                    setScrollHintVisible={setScrollHintVisible}
                />
                <Skills />
                <CodeExamples />
                <WavesBackground>
                    <AboutMe />
                </WavesBackground>
            </main>
            <Footer />
        </MotionConfig>
    );
}
