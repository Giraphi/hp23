import { useEffect, useRef, useState } from "react";
import Grid from "@/src/components/Grid/Grid";
import Button from "@/src/components/Button";
import MeScene from "@/src/components/Sections/Intro/MeScene/MeScene";
import Headline from "@/src/components/Headline";
import { Device, useDeviceStore } from "@/src/store/useDeviceStore";
import { useScroll } from "framer-motion";
import MeSceneLarge from "@/src/components/Sections/Intro/MeScene/large/MeSceneLarge";
import Appear from "@/src/components/Effects/Appear";
import AppearWords from "@/src/components/Effects/AppearWords";
import useNavigationSection from "@/src/hooks/useNavigationSection";
import { SectionId } from "@/src/store/useActiveSectionStore";
import ScrollTarget from "@/src/components/ScrollTarget";

export default function Intro() {
    const device = useDeviceStore((state) => state.device);
    const measureRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const [textContentHeight, setTextContentHeight] = useState(0);
    const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end start"] });
    useNavigationSection(rootRef, SectionId.intro);

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
        <>
            <ScrollTarget
                id={SectionId.intro}
                disableOffset={true}
            />
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
                        <Appear once={true}>
                            <Headline
                                type={"h1"}
                                className={"text-shadow-pink pb-2 text-center lg:inline-flex lg:text-left"}
                            >
                                Raphael Höps
                            </Headline>
                        </Appear>
                        <Appear once={true}>
                            <Headline
                                type={"h1"}
                                className={"pb-4 text-center text-pink-600 lg:inline-flex lg:pb-5 lg:text-left xl:pb-8"}
                            >
                                Frontend Developer
                            </Headline>
                        </Appear>
                    </div>
                </div>

                <div className={"col-start-content-left col-end-content-right row-start-3 lg:col-end-10 xl:col-end-9"}>
                    <div className={"relative z-10 pb-4 text-center lg:pb-5 lg:text-left xl:pb-8 xl:text-2xl"}>
                        <AppearWords
                            once={true}
                            delay={0.5}
                            text={
                                "Hi! I’m a Munich based frontend developer with a strong background in computer science and a high understanding of design and modern UI/UX concepts."
                            }
                        />
                    </div>

                    <div className={"flex justify-center lg:inline-flex lg:justify-start"}>
                        <Appear
                            delay={1.5}
                            disableTransform={true}
                            once={true}
                        >
                            <Button className={"relative z-10"}>Contact</Button>
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
        </>
    );
}
