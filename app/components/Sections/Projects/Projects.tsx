import { useRef, useState } from "react";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import SectionParagraph from "@/app/components/SectionParagraph";
import SectionBackground from "@/app/components/SectionBackground";
import Cards from "@/app/components/Cards/Cards";
import Card from "@/app/components/Cards/Card";
import designUnit from "@/app/assets/projects/design-unit.png";
import iceberg from "@/app/assets/projects/iceberg.png";
import ubu2 from "@/app/assets/projects/ubu2.png";
import SectionText from "@/app/components/SectionText";
import Grid from "@/app/components/Grid/Grid";
import ScrollHint from "@/app/components/Sections/Intro/ScrollHint/ScrollHint";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import TextLink from "@/app/components/TextLink";
import useNavigationSection from "@/app/hooks/useNavigationSection";
import { SectionId } from "@/app/store/useActiveSectionStore";

export interface ProjectsProps {
    scrollHintVisible: boolean;
    setScrollHintVisible: (visible: boolean) => void;
}

export default function Projects(props: ProjectsProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "100px end"] });
    const hintOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
    useNavigationSection(sectionRef, SectionId.projects);

    useMotionValueEvent(hintOpacity, "change", (value) => {
        const visibleUpdate = value !== 0;
        props.setScrollHintVisible(visibleUpdate);
    });

    return (
        <>
            {props.scrollHintVisible && (
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
