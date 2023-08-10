import { useState } from "react";
import { SectionId } from "@/app/store/useActiveSectionStore";
import { AnimatePresence, motion } from "framer-motion";
import TopBarItem from "@/app/components/TopBar/TopBarItem";
import useOutsideClick from "@/app/hooks/useOutsideClick";

export interface TopBarProps {
    visible: boolean;
}

const menuVariants = {
    visible: {
        clipPath: "ellipse(50vh 200vh at 100% 1.5rem)",
    },
    hidden: {
        clipPath: "ellipse(3rem 1.5rem at 100% 1.5rem)",
        transition: {
            duration: 0.15,
        },
    },
};

export default function TopBar(props: TopBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    function handleItemClick() {
        setIsOpen(false);
    }

    return (
        <nav
            className={"fixed right-0 top-0 z-30 grid justify-items-end"}
            ref={ref}
        >
            <div
                className={`relative z-20 col-start-1 row-start-1 flex h-12 w-12 cursor-pointer flex-col justify-between rounded-bl-md bg-black px-2 py-[1.1rem] transition-opacity ${
                    props.visible || isOpen ? "opacity-1" : "opacity-0"
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
                        className={
                            "relative z-10 col-start-1 row-start-1 flex h-[100lvh] flex-col items-end bg-black pl-6 pr-3 pt-16 lg:pt-24"
                        }
                        variants={menuVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                    >
                        <TopBarItem
                            handleClick={handleItemClick}
                            id={SectionId.intro}
                        >
                            Intro
                        </TopBarItem>
                        <TopBarItem
                            handleClick={handleItemClick}
                            id={SectionId.projects}
                        >
                            Projects
                        </TopBarItem>
                        <TopBarItem
                            handleClick={handleItemClick}
                            id={SectionId.skills}
                        >
                            Skills
                        </TopBarItem>
                        <TopBarItem
                            handleClick={handleItemClick}
                            id={SectionId.codeExamples}
                        >
                            Code Examples
                        </TopBarItem>
                        <TopBarItem
                            handleClick={handleItemClick}
                            id={SectionId.aboutMe}
                        >
                            About Me
                        </TopBarItem>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
