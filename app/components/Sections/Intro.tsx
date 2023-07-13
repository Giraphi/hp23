import React from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeModel from "@/app/components/MeModel/MeModel";

export interface IntroProps {}

export default function Intro(props: IntroProps) {
    return (
        <Grid
            className={
                "relative grid-rows-[15vh_auto_auto_200vh] md:h-screen md:grid-rows-[1fr_auto_auto_1fr_auto] md:bg-gradient-radial md:from-gray-4 md:to-gray-1"
            }
        >
            <div
                className={
                    "sticky top-0 z-[-1] col-start-[screen-left] col-end-[screen-right] row-start-1 h-[100vh] bg-gradient-radial from-gray-3 to-gray-2"
                }
            ></div>

            <div className={"col-start-[content-left] col-end-[content-right] row-start-2"}>
                <h1 className={"pb-2 text-center font-delaGothicOne text-4xl md:pb-0 md:text-left md:text-6xl xlg:text-7xl"}>
                    Raphael Höps
                </h1>
                <h1 className={"pb-4 text-center font-delaGothicOne text-4xl text-pink md:pb-10 md:text-left md:text-6xl xlg:text-7xl"}>
                    Frontend Developer
                </h1>
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

            {/*mobile only*/}

            <div
                className={"col-start-[screen-left] col-end-[screen-right] row-span-4 row-start-1 pt-[35lvh] md:row-span-4 md:row-start-1"}
            >
                <MeModel />
            </div>

            {/*end mobile only*/}

            {/*Desktop*/}
            {/*<div className={"col-start-[screen-left] col-end-[screen-right] row-start-4 md:row-span-4 md:row-start-1"}>*/}
            {/*    <MeModel />*/}
            {/*</div>*/}
        </Grid>
    );
}
