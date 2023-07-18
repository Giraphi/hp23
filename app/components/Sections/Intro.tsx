import React, { useEffect, useRef, useState } from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeScene from "@/app/components/MeScene/MeScene";
import Headline from "@/app/components/Headline";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import MeSceneLarge from "@/app/components/MeScene/large/MeSceneLarge";
import ScrollHintDelay from "@/app/components/ScrollHint/ScrollHintDelay";
import ScrollHintFadeOut from "@/app/components/ScrollHint/ScrollHintFadeOut";

export interface IntroProps {
    scrollYProgress?: MotionValue<number>;
}

export default function Intro(props: IntroProps) {
    const device = useDeviceStore((state) => state.device);
    const measureRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0);
    const { scrollY } = useScroll();
    const totalHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    const scrollYProgress = useTransform(scrollY, [0, totalHeight * 3], [0, 1]);

    useEffect(() => {
        if (device >= Device.lg) {
            return;
        }

        function measure() {
            if (!measureRef.current) {
                return;
            }
            setSize(measureRef.current.clientHeight);
        }

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [device]);

    return (
        <div className={`sticky top-[-200lvh] lg:static`}>
            <Grid
                ref={rootRef}
                className={`h-[300lvh] grid-rows-[15lvh_auto_auto_1fr] lg:h-screen lg:grid-rows-[1fr_auto_auto_1fr_auto] lg:bg-gradient-radial lg:from-gray-3 lg:to-gray-2`}
            >
                <div
                    className={"col-content row-span-3 row-start-1"}
                    ref={measureRef}
                ></div>
                <div
                    className={
                        "sticky top-0 z-[-1] col-start-screen-left col-end-screen-right row-start-1 h-lvh bg-gradient-radial from-gray-3 to-gray-2 lg:hidden"
                    }
                ></div>

                <div className={"col-content row-start-2"}>
                    <Headline
                        type={"h1"}
                        className={"relative pb-2"}
                    >
                        Raphael Höps
                    </Headline>
                    <Headline
                        type={"h1"}
                        className={"pb-4 text-pink lg:pb-5 xlg:pb-8"}
                    >
                        Frontend Developer
                    </Headline>
                </div>

                <div className={"col-start-content-left col-end-content-right row-start-3 lg:col-end-10 xlg:col-end-9"}>
                    <p className={"xlg-pb-8 pb-4 text-center lg:pb-5 lg:text-left xlg:text-2xl"}>
                        Hi! I’m a Munich based frontend developer with a strong background in computer science and a high understanding of
                        modern UI/UX concepts.
                    </p>

                    <div className={"flex justify-center lg:justify-start"}>
                        <Button className={"relative z-10"}>Contact</Button>
                    </div>
                </div>

                {device < Device.lg ? (
                    <>
                        <div
                            className={"col-screen row-span-4 row-start-1"}
                            style={{ paddingTop: `calc(${size}px - 28lvh)`, visibility: `${size !== 0 ? "visible" : "hidden"}` }}
                        >
                            <MeScene scrollYProgress={scrollYProgress} />
                        </div>
                        <div className={"col-start-content-left row-start-4 flex items-end justify-center"}>
                            <div className={"sticky bottom-4"}>
                                <ScrollHintDelay
                                    initDelayMs={8000}
                                    delayMs={5000}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={"col-screen row-span-4 row-start-1 "}>
                            <MeSceneLarge />
                        </div>
                        <div className={"col-screen row-start-4 flex items-end justify-center pb-4"}>
                            <ScrollHintFadeOut />
                        </div>
                    </>
                )}
            </Grid>
        </div>
    );
}
