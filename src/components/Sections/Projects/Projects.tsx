"use client";

import { useRef } from "react";
import SectionGrid from "@/src/components/SectionGrid";
import SectionHeadline from "@/src/components/SectionHeadline";
import SectionParagraph from "@/src/components/SectionParagraph";
import SectionBackground from "@/src/components/SectionBackground";
import Cards from "@/src/components/Cards/Cards";
import Card from "@/src/components/Cards/Card";
import designUnit from "@/src/assets/projects/design-unit.png";
import iceberg from "@/src/assets/projects/iceberg.png";
import ubu2 from "@/src/assets/projects/ubu2.png";
import SectionText from "@/src/components/SectionText";
import Grid from "@/src/components/Grid/Grid";
import ScrollHint from "@/src/components/Sections/Intro/ScrollHint/ScrollHint";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import TextLink from "@/src/components/TextLink";
import useNavigationSection from "@/src/hooks/useNavigationSection";
import { SectionId } from "@/src/store/useActiveSectionStore";
import ScrollTarget from "@/src/components/ScrollTarget";
import { useHomeStore } from "@/src/store/useHomeStore";

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "100px end"] });
    const hintOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
    useNavigationSection(sectionRef, SectionId.projects);

    useMotionValueEvent(hintOpacity, "change", (value) => {
        const visibleUpdate = value !== 0;
        if (visibleUpdate === useHomeStore.getState().scrolledIntoProjectsSection) {
            return;
        }
        useHomeStore.setState((state) => ({ ...state, scrolledIntoProjectsSection: visibleUpdate }));
    });

    return (
        <>
            {!useHomeStore.getState().scrolledIntoProjectsSection && (
                <motion.div
                    style={{ opacity: hintOpacity }}
                    className={"fixed bottom-4 z-30 w-full"}
                >
                    <Grid>
                        <div className={"col-content flex justify-end lg:justify-center"}>
                            <ScrollHint />
                        </div>
                    </Grid>
                </motion.div>
            )}

            <ScrollTarget id={SectionId.projects} />

            <SectionBackground
                startDark={true}
                className={"m border-t border-gray-c lg:border-none"}
                ref={sectionRef}
            >
                <SectionGrid>
                    <div className={"col-content"}>
                        <SectionHeadline>Projects</SectionHeadline>
                    </div>
                    <SectionText>
                        <SectionParagraph>
                            Here’s a small selection of projects I’ve been working on recently, mainly during my employment at the Munich
                            web office funct.
                        </SectionParagraph>
                        <SectionParagraph disableSpace={true}>
                            For legal reasons some of the clients can’t be named explicitly.
                        </SectionParagraph>
                    </SectionText>
                    <Cards className={"col-content"}>
                        <Card
                            image={designUnit}
                            headline={"Homepage for a tech and design unit of a large consulting group"}
                        >
                            Implementation of a react frontend in collaboration with the Italian design studio{" "}
                            <TextLink
                                target={"_blank"}
                                href={"https://vicinedesign.com/"}
                            >
                                Vicine
                            </TextLink>
                            .
                        </Card>
                        <Card
                            image={iceberg}
                            headline={"3D presentational website for a large consulting group "}
                        >
                            Implementation of a three.js/r3f internal website in collaboration with the designer and 3D artist{" "}
                            <TextLink
                                href={"https://www.michaelflynnbost.com/"}
                                target={"_blank"}
                            >
                                Michael Flynn Bost
                            </TextLink>
                            .
                        </Card>
                        <Card
                            image={ubu2}
                            headline={"Website for my band Ubu Imperator"}
                        >
                            Design and full implementation of a next.js/react website making use of our drummer’s illustrations.
                        </Card>
                    </Cards>
                </SectionGrid>
            </SectionBackground>
        </>
    );
}