import React, { useEffect, useRef, useState } from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeScene from "@/app/components/MeScene/MeScene";
import Headline from "@/app/components/Headline";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface IntroProps {}

export default function Intro(props: IntroProps) {
    const device = useDeviceStore((state) => state.device);
    const measureRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0);

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
        <Grid
            className={
                "h-[400lvh] grid-rows-[15lvh_auto_auto_1fr] lg:h-screen lg:grid-rows-[1fr_auto_auto_1fr_auto] lg:bg-gradient-radial lg:from-gray-3 lg:to-gray-2"
            }
        >
            <div
                className={"col-start-[content-left] col-end-[content-right] row-span-3 row-start-1"}
                ref={measureRef}
            ></div>
            <div
                className={
                    "sticky top-0 z-[-1] col-start-[screen-left] col-end-[screen-right] row-start-1 h-[100lvh] bg-gradient-radial from-gray-3 to-gray-2 lg:hidden"
                }
            ></div>

            <div className={"col-start-[content-left] col-end-[content-right] row-start-2"}>
                <Headline type={"h1"}>Raphael Höps</Headline>
                <Headline
                    type={"h1"}
                    className={"pb-4 text-pink"}
                >
                    Frontend Developer
                </Headline>
            </div>

            <div className={"col-start-[content-left] col-end-[content-right] row-start-3 lg:col-end-10 xlg:col-end-9"}>
                <p className={"pb-4 text-center text-base lg:pb-10 lg:text-left lg:text-2xl"}>
                    Hi! I’m a Munich based frontend developer with a strong background in computer science and a solid understanding of
                    modern UI/UX concepts.
                </p>

                <div className={"flex justify-center lg:justify-start"}>
                    <Button>Contact</Button>
                </div>
            </div>

            {device < Device.lg ? (
                <div
                    className={"col-start-[screen-left] col-end-[screen-right] row-span-4 row-start-1  lg:row-span-4 lg:row-start-1"}
                    style={{ paddingTop: `calc(${size}px - 35lvh)`, visibility: `${size !== 0 ? "visible" : "hidden"}` }}
                >
                    <MeScene />
                </div>
            ) : (
                <div className={"col-start-[screen-left] col-end-[screen-right] row-start-4 lg:row-span-4 lg:row-start-1"}>
                    <MeScene />
                </div>
            )}
        </Grid>
    );
}
