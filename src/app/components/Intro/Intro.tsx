"use client";

import { useEffect, useRef, useState } from "react";
import Grid from "@/components/Grid/Grid";
import Button from "@/components/Button";
import MeScene from "@/app/components/Intro/MeScene/MeScene";
import Headline from "@/components/Headline";
import { Device, useDeviceStore } from "@/store/useDeviceStore";
import { useScroll } from "framer-motion";
import MeSceneLarge from "@/app/components/Intro/MeScene/large/MeSceneLarge";
import Appear from "@/components/Effects/Appear";
import AppearWords from "@/components/Effects/AppearWords";
import { SectionId } from "@/store/useActiveSectionStore";
import ScrollTarget from "@/components/ScrollTarget";
import Section from "@/components/Section";
import GlitchText from "@/components/GlitchText/GlitchText";
import colors from "tailwindcss/colors";

export default function Intro() {
    const device = useDeviceStore((state) => state.device);
    const measureRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const [textContentHeight, setTextContentHeight] = useState(0);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    useEffect(() => {
        if (device >= Device.lg) {
            return;
        }

        function measure() {
            if (!measureRef.current) {
                return;
            }
            setTextContentHeight(measureRef.current.clientHeight);
        }

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [device]);

    return (
        <Section sectionId={SectionId.intro}>
            <ScrollTarget
                id={SectionId.intro}
                disableOffset={true}
            />
            <Grid
                ref={ref}
                className={`grid-rows-[15lvh_auto_auto_80lvh] lg:h-screen lg:grid-rows-[1fr_auto_auto_1fr_auto] lg:bg-gradient-radial lg:from-neutral-700 lg:to-neutral-900`}
            >
                <div
                    className={"col-content row-span-3 row-start-1"}
                    ref={measureRef}
                ></div>
                <div
                    className={
                        "sticky top-0 z-[-1] col-start-screen-left col-end-screen-right row-start-1 h-lvh bg-gradient-radial from-neutral-700 to-neutral-900 lg:hidden"
                    }
                ></div>

                <div className={"col-content row-start-2"}>
                    <div className={"relative z-10 flex-col lg:inline-flex "}>
                        <Appear once={true}>
                            <Headline
                                type={"h1"}
                                className={"pb-2 text-center lg:inline-flex lg:text-left"}
                            >
                                Raphael Höps
                            </Headline>
                        </Appear>
                        <Appear once={true}>
                            <Headline
                                type={"h1"}
                                className={"pb-4 text-center text-pink-600 lg:inline-flex lg:pb-5 lg:text-left xxl:pb-8"}
                            >
                                Web Developer
                            </Headline>
                        </Appear>
                    </div>
                </div>

                <div className={"col-start-content-left col-end-content-right row-start-3 lg:col-end-10 xxl:col-end-9"}>
                    <div className={"relative z-10 pb-4 text-center lg:pb-5 lg:text-left xxl:pb-8 xxl:text-2xl"}>
                        <AppearWords
                            once={true}
                            delay={0.5}
                            text={
                                "Hi! I’m a Munich based web/frontend developer with a strong background in computer science and a high understanding of design and modern UI/UX concepts."
                            }
                        />
                    </div>

                    <div className={"flex justify-center lg:inline-flex lg:justify-start"}>
                        <Appear
                            delay={1.5}
                            disableTransform={true}
                            once={true}
                        >
                            <Button
                                className={"glitchTextParent relative z-10"}
                                href="mailto:hoeps.raphael@gmail.com"
                                target="_blank"
                            >
                                <GlitchText bgColor={colors.neutral[950]}>
                                    <span className="font-bold uppercase">Contact</span>
                                </GlitchText>
                            </Button>
                        </Appear>
                    </div>
                </div>

                {device < Device.lg ? (
                    <>
                        <div
                            className={"col-screen row-span-4 row-start-1"}
                            style={{ visibility: `${textContentHeight !== 0 ? "visible" : "hidden"}` }}
                        >
                            <Appear
                                delay={1.5}
                                disableTransform={true}
                                once={true}
                                className={"h-full"}
                            >
                                <MeScene
                                    scrollYProgress={scrollYProgress}
                                    textContentHeight={textContentHeight}
                                />
                            </Appear>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={"col-screen row-span-4 row-start-1 "}>
                            <Appear
                                delay={1.5}
                                disableTransform={true}
                                once={true}
                                className={"h-full"}
                            >
                                <MeSceneLarge />
                            </Appear>
                        </div>
                    </>
                )}
            </Grid>
        </Section>
    );
}
