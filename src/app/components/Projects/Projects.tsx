"use client";

import { useEffect, useRef } from "react";
import SectionGrid from "@/components/SectionGrid";
import SectionHeadline from "@/components/SectionHeadline";
import SectionParagraph from "@/components/SectionParagraph";
import SectionBackground from "@/components/SectionBackground";
import Cards from "@/components/Cards/Cards";
import Card from "@/components/Cards/Card";
import designUnit from "@/assets/tech-and-design/design-unit.png";
import iceberg from "@/assets/3d-presentation/iceberg.png";
import ubu2 from "@/assets/projects/ubu2.png";
import SectionText from "@/components/SectionText";
import Grid from "@/components/Grid/Grid";
import ScrollHint from "@/app/components/Intro/ScrollHint/ScrollHint";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import InlineTextLink from "@/components/InlineTextLink";
import { SectionId } from "@/store/useActiveSectionStore";
import ScrollTarget from "@/components/ScrollTarget";
import { useHomeStore } from "@/store/useHomeStore";
import Section from "@/components/Section";
import { ModalSearchParams } from "@/assets/modalSearchParams";

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
                    ref={ref}
                >
                    <SectionGrid>
                        <div className={"col-content"}>
                            <SectionHeadline>Projects</SectionHeadline>
                        </div>
                        <SectionText>
                            <SectionParagraph>
                                Here’s a small selection of projects I’ve been working on recently, mainly during my employment at the
                                Munich web office{" "}
                                <InlineTextLink
                                    href={"https://funct.com/"}
                                    target={"_blank"}
                                >
                                    funct
                                </InlineTextLink>
                                .
                            </SectionParagraph>
                            <SectionParagraph disableSpace={true}>
                                For legal reasons some of the clients can’t be named explicitly.
                            </SectionParagraph>
                        </SectionText>
                        <Cards className={"col-content"}>
                            <Card
                                image={designUnit}
                                headline={"Homepage for a tech and design team of a large consulting group"}
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
                                headline={"3D website for a large consulting group "}
                                href={`/?modal=${ModalSearchParams.presentation}`}
                            >
                                Implementation of a 3D website with three.js/r3f in collaboration with the designer and 3D artist{" "}
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
                                href={`/?modal=${ModalSearchParams.ubu}`}
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
