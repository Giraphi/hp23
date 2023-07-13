import React from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeModel from "@/app/components/MeModel/MeModel";

export interface IntroProps {}

export default function Intro(props: IntroProps) {
    return (
        <Grid
            className={
                "grid-rows-[15vh_auto_auto_5vh_90vh] bg-gradient-radial from-gray-4 to-gray-1 md:h-screen md:grid-rows-[1fr_auto_auto_1fr_auto]"
            }
        >
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

            <div className={"col-start-[screen-left] col-end-[screen-right] row-start-5 md:row-span-4 md:row-start-1"}>
                <MeModel />
            </div>
        </Grid>
    );
}
