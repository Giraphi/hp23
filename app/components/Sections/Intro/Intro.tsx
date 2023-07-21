import React, { useEffect, useRef, useState } from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeScene from "@/app/components/Sections/Intro/MeScene/MeScene";
import Headline from "@/app/components/Headline";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import MeSceneLarge from "@/app/components/Sections/Intro/MeScene/large/MeSceneLarge";
import ScrollHintDelay from "@/app/components/Sections/Intro/ScrollHint/ScrollHintDelay";
import ScrollHintFadeOut from "@/app/components/Sections/Intro/ScrollHint/ScrollHintFadeOut";

export interface IntroProps {
    scrollYProgress?: MotionValue<number>;
}

export default function Intro(props: IntroProps) {
    const device = useDeviceStore((state) => state.device);
    const measureRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const [textContentHeight, setTextContentHeight] = useState(0);
    const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end start"] });
    // const totalHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    // const scrollYProgress = useTransform(scrollY, [0, totalHeight * 3], [0, 1]);

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

    // start to float when top edge is 200vh above viewport. Since Intro has a height of 300vh this is
    // exactly when bottom edge meets bottom of viewport
    // Can't use bottom:0 here, because that makes element float as long as bottom edge is below viewport.
    return (
        <Grid
            ref={rootRef}
            className={`grid-rows-[15lvh_auto_auto_80lvh] lg:h-screen lg:grid-rows-[1fr_auto_auto_1fr_auto] lg:bg-gradient-radial lg:from-gray-3 lg:to-gray-2`}
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
                <div className={"relative z-10 flex-col lg:inline-flex "}>
                    <Headline
                        type={"h1"}
                        className={"pb-2 text-center lg:inline-flex lg:text-left"}
                    >
                        Raphael Höps
                    </Headline>
                    <Headline
                        type={"h1"}
                        className={"pb-4 text-center text-pink lg:inline-flex lg:pb-5 lg:text-left xl:pb-8"}
                    >
                        Frontend Developer
                    </Headline>
                </div>
            </div>

            <div className={"col-start-content-left col-end-content-right row-start-3 lg:col-end-10 xl:col-end-9"}>
                <p className={"relative z-10 pb-4 text-center lg:pb-5 lg:text-left xl:pb-8 xl:text-2xl"}>
                    Hi! I’m a Munich based frontend developer with a strong background in computer science and a high understanding of
                    design and modern UI/UX concepts.
                </p>

                <div className={"flex justify-center lg:inline-flex lg:justify-start"}>
                    <Button className={"relative z-10"}>Contact</Button>
                </div>
            </div>

            {device < Device.lg ? (
                <>
                    <div
                        className={"col-screen row-span-4 row-start-1"}
                        style={{ visibility: `${textContentHeight !== 0 ? "visible" : "hidden"}` }}
                    >
                        <MeScene
                            scrollYProgress={scrollYProgress}
                            textContentHeight={textContentHeight}
                        />
                    </div>
                    {/*<div className={"col-start-content-left row-start-4 flex items-end justify-center"}>*/}
                    {/*    <div className={"sticky bottom-4"}>*/}
                    {/*        <ScrollHintDelay*/}
                    {/*            initDelayMs={5000}*/}
                    {/*            delayMs={2000}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
    );
}
