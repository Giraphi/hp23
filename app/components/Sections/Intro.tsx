import React from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeScene from "@/app/components/MeScene/MeScene";
import Headline from "@/app/components/Headline";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface IntroProps {}

export default function Intro(props: IntroProps) {
    const device = useDeviceStore((state) => state.device);

    return (
        <Grid
            className={
                "relative grid-rows-[15vh_auto_auto_200vh] md:h-screen md:grid-rows-[1fr_auto_auto_1fr_auto] md:bg-gradient-radial md:from-gray-4 md:to-gray-1"
            }
        >
            <div
                className={
                    "sticky top-0 z-[-1] col-start-[screen-left] col-end-[screen-right] row-start-1 h-[100vh] bg-gradient-radial from-gray-3 to-gray-2 md:hidden"
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
                <p className={"pb-4 text-center text-base md:pb-10 md:text-left md:text-2xl"}>
                    Hi! I’m a Munich based frontend developer with a strong background in computer science and a solid understanding of
                    modern UI/UX concepts.
                </p>

                <div className={"flex justify-center md:justify-start"}>
                    <Button>Contact</Button>
                </div>
            </div>

            {device < Device.md ? (
                <div
                    className={
                        "col-start-[screen-left] col-end-[screen-right] row-span-4 row-start-1 pt-[35lvh] md:row-span-4 md:row-start-1"
                    }
                >
                    <MeScene />
                </div>
            ) : (
                <div className={"col-start-[screen-left] col-end-[screen-right] row-start-4 md:row-span-4 md:row-start-1"}>
                    <MeScene />
                </div>
            )}
        </Grid>
    );
}
