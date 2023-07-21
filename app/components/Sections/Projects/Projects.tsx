import React, { useRef } from "react";
import SectionGrid from "@/app/components/SectionGrid";
import SectionHeadline from "@/app/components/SectionHeadline";
import SectionParagraph from "@/app/components/SectionParagraph";
import Section from "@/app/components/Section";
import Cards from "@/app/components/Cards/Cards";
import Card from "@/app/components/Cards/Card";
import designUnit2 from "@/app/assets/projects/design-unit-2.png";
import iceberg from "@/app/assets/projects/iceberg.png";
import ubu2 from "@/app/assets/projects/ubu2.png";
import SectionText from "@/app/components/SectionText";
import Grid from "@/app/components/Grid/Grid";
import ScrollHint from "@/app/components/Sections/Intro/ScrollHint/ScrollHint";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

export interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "100px end"] });
    const hintOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

    return (
        <>
            <motion.div
                style={{ opacity: hintOpacity }}
                className={"fixed bottom-4 w-full"}
            >
                <Grid>
                    <div className={"col-content flex justify-end lg:justify-center"}>
                        <ScrollHint />
                    </div>
                </Grid>
            </motion.div>

            <Section
                startDark={true}
                className={"from-gray-1 to-gray-3 lg:from-gray-2 lg:to-gray-3"}
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
                            Please note that for legal reasons, some parts of the presented projects needed to be sanitized and most clients
                            can’t be named explicitly. More about that on request.
                        </SectionParagraph>
                    </SectionText>
                    <Cards className={"col-content"}>
                        <Card
                            image={designUnit2}
                            headline={"Homepage for a tech and design unit of a large consulting group"}
                        >
                            Implementation of a react frontend in collaboration with the Italian design studio Vicine.
                        </Card>
                        <Card
                            image={iceberg}
                            headline={"3D presentational website for a large consulting group "}
                        >
                            Implementation of a three.js/r3f internal website in collaboration with the designer and 3D artist Michael
                            Flynn.
                        </Card>
                        <Card
                            image={ubu2}
                            headline={"Website for my band Ubu Imperator"}
                        >
                            Design and full implementation of a next.js/react website making use of our drummer’s illustrations.
                        </Card>
                    </Cards>
                </SectionGrid>
            </Section>
        </>
    );
}
