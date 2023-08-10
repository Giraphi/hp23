import { useState } from "react";
import { SectionId } from "@/app/store/useActiveSectionStore";
import { AnimatePresence, motion } from "framer-motion";
import TopBarItem from "@/app/components/TopBar/TopBarItem";

export interface TopBarProps {
    visible: boolean;
}

const menuVariants = {
    visible: {
        clipPath: "ellipse(50vh 200vh at 0% 1.5rem)",
    },
    hidden: {
        clipPath: "ellipse(3rem 1.5rem at 0% 1.5rem)",
        transition: {
            duration: 0.15,
        },
    },
};

export default function TopBar(props: TopBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={"fixed left-0 top-0 z-30 grid"}>
            <div
                className={`relative z-20 col-start-1 row-start-1 flex h-12 w-12  cursor-pointer flex-col justify-between rounded-br-md bg-black px-2 py-[1.1rem] transition-opacity ${
                    props.visible ? "opacity-1" : "opacity-0"
                } `}
                onClick={() => setIsOpen((x) => !x)}
            >
                <div className={`h-1 w-full rounded-sm bg-white transition-transform ${isOpen ? "translate-y-[0.3rem] rotate-45" : ""}`} />
                <div
                    className={`h-1 w-full rounded-sm bg-white transition-transform ${isOpen ? "-translate-y-[0.3rem] -rotate-45" : ""}`}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={"relative z-10 col-start-1 row-start-1 flex h-[100lvh] w-40 flex-col bg-black pl-3 pt-16"}
                        variants={menuVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                    >
                        <TopBarItem id={SectionId.intro}>Intro</TopBarItem>
                        <TopBarItem id={SectionId.projects}>Projects</TopBarItem>
                        <TopBarItem id={SectionId.skills}>Skills</TopBarItem>
                        <TopBarItem id={SectionId.codeExamples}>Code Examples</TopBarItem>
                        <TopBarItem id={SectionId.aboutMe}>About Me</TopBarItem>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
