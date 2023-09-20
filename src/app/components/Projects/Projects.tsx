"use client";

import { useEffect, useRef } from "react";
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
import ScrollHint from "@/src/app/components/Intro/ScrollHint/ScrollHint";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import InlineTextLink from "@/src/components/InlineTextLink";
import { SectionId } from "@/src/store/useActiveSectionStore";
import ScrollTarget from "@/src/components/ScrollTarget";
import { useHomeStore } from "@/src/store/useHomeStore";
import Section from "@/src/components/Section";
import { ModalSearchParams } from "@/src/assets/modalSearchParams";

export default function Projects() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "100px end"] });
    const hintOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
    const scrolledIntoProjectsSection = useHomeStore((state) => state.scrolledIntoProjectsSection);

    useMotionValueEvent(hintOpacity, "change", (value) => {
        useHomeStore.setState((state) => ({ ...state, scrolledIntoProjectsSection: value === 0 }));
    });

    useEffect(() => {
        useHomeStore.setState((state) => ({ ...state, scrolledIntoProjectsSection: hintOpacity.get() === 0 }));
    }, [hintOpacity]);

    return (
        <>
            {!scrolledIntoProjectsSection && (
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

            <Section sectionId={SectionId.projects}>
                <SectionBackground
                    startDark={true}
                    className={"border-t border-gray-c lg:border-none"}
                    ref={ref}
                >
                    <SectionGrid>
                        <div className={"col-content"}>
                            <SectionHeadline>Projects</SectionHeadline>
                        </div>
                        <SectionText>
                            <SectionParagraph>
                                Here’s a small selection of projects I’ve been working on recently, mainly during my employment at the
                                Munich web office funct.
                            </SectionParagraph>
                            <SectionParagraph disableSpace={true}>
                                For legal reasons some of the clients can’t be named explicitly.
                            </SectionParagraph>
                        </SectionText>
                        <Cards className={"col-content"}>
                            <Card
                                image={designUnit}
                                headline={"Homepage for a tech and design unit of a large consulting group"}
                                href={`/?modal=${ModalSearchParams.techAndDesign}`}
                            >
                                Implementation of a react frontend in collaboration with the Italian design studio{" "}
                                <InlineTextLink
                                    target={"_blank"}
                                    href={"https://vicinedesign.com/"}
                                >
                                    Vicine
                                </InlineTextLink>
                                .
                            </Card>
                            <Card
                                image={iceberg}
                                headline={"3D presentational website for a large consulting group "}
                                href={`/?modal=${ModalSearchParams.techAndDesign}`}
                            >
                                Implementation of a three.js/r3f internal website in collaboration with the designer and 3D artist{" "}
                                <InlineTextLink
                                    href={"https://www.michaelflynnbost.com/"}
                                    target={"_blank"}
                                >
                                    Michael Flynn Bost
                                </InlineTextLink>
                                .
                            </Card>
                            <Card
                                image={ubu2}
                                headline={"Website for my band Ubu Imperator"}
                                href={`/?modal=${ModalSearchParams.techAndDesign}`}
                            >
                                Design and full implementation of a next.js/react website making use of our drummer’s illustrations.
                            </Card>
                        </Cards>
                    </SectionGrid>
                </SectionBackground>
            </Section>
        </>
    );
}
