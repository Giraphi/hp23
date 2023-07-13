import React from "react";
import Grid from "@/app/components/Grid/Grid";
import Button from "@/app/components/Button";
import MeModel from "@/app/components/MeModel/MeModel";

export interface IntroProps {}

export default function Intro(props: IntroProps) {
    return (
        <Grid className={"h-screen grid-rows-[1fr_auto_auto_1fr] bg-gradient-radial from-gray-4 to-gray-1"}>
            <div className={"col-start-[content-left] col-end-[content-right] row-start-2"}>
                <h1 className={" font-delaGothicOne text-6xl"}>Raphael Höps</h1>
                <h1 className={"pb-10 font-delaGothicOne text-6xl text-pink"}>Frontend Developer</h1>
            </div>

            <div className={"col-span-6 col-start-[content-left] row-start-3"}>
                <p className={"pb-10 text-2xl"}>
                    Hi! I’m a Munich based frontend developer with a strong background in computer science and a solid understanding of
                    modern UI/UX concepts.
                </p>
                <Button>Contact</Button>
            </div>

            <div className={"col-start-[screen-left] col-end-[screen-right] row-span-4 row-start-1"}>
                <MeModel />
            </div>
        </Grid>
    );
}
