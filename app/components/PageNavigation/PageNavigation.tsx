"use client";

import { useState } from "react";
import { SectionId } from "@/app/store/useActiveSectionStore";
import { AnimatePresence, motion } from "framer-motion";
import PageNavigationItem from "@/app/components/PageNavigation/PageNavigationItem";
import useOutsideClick from "@/app/hooks/useOutsideClick";

type Item = { id: SectionId; label: string };

export interface PageNavigationProps {
    visible: boolean;
    items: Item[];
    alwaysOpen?: boolean;
    lightBackground?: boolean;
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

export default function PageNavigation(props: PageNavigationProps) {
    const [isOpen, setIsOpen] = useState(!!props.alwaysOpen);
    const ref = useOutsideClick(() => {
        if (props.alwaysOpen) {
            return;
        }
        setIsOpen(false);
    });

    function handleItemClick() {
        if (props.alwaysOpen) {
            return;
        }
        setIsOpen(false);
    }

    return (
        <nav
            className={"fixed right-0 top-0 z-30 grid justify-items-end"}
            ref={ref}
        >
            {!props.alwaysOpen && (
                <div
                    className={`relative z-20 col-start-1 row-start-1 flex h-12 w-12 cursor-pointer flex-col justify-between rounded-bl-md bg-black px-2 py-[1.1rem] transition-opacity ${
                        props.visible || isOpen ? "opacity-1" : "opacity-0"
                    } `}
                    onClick={() => setIsOpen((x) => !x)}
                >
                    <div
                        className={`h-1 w-full rounded-sm bg-white transition-transform ${isOpen ? "translate-y-[0.3rem] rotate-45" : ""}`}
                    />
                    <div
                        className={`h-1 w-full rounded-sm bg-white transition-transform ${
                            isOpen ? "-translate-y-[0.3rem] -rotate-45" : ""
                        }`}
                    />
                </div>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`relative z-10 col-start-1 row-start-1 flex h-[100lvh] flex-col items-end ${
                            props.lightBackground ? "bg-transparent" : "bg-black"
                        } pl-6 pr-3 pt-16 lg:pt-24`}
                        variants={menuVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        exit={"hidden"}
                    >
                        <div className={"pb-7 text-lg font-bold"}>On this page</div>
                        {props.items.map((item) => (
                            <PageNavigationItem
                                key={item.id}
                                handleClick={handleItemClick}
                                id={item.id}
                            >
                                {item.label}
                            </PageNavigationItem>
                        ))}
                        {/*    Intro*/}
                        {/*</PageNavigationItem>*/}
                        {/*<PageNavigationItem*/}
                        {/*    handleClick={handleItemClick}*/}
                        {/*    id={SectionId.projects}*/}
                        {/*>*/}
                        {/*    Projects*/}
                        {/*</PageNavigationItem>*/}
                        {/*<PageNavigationItem*/}
                        {/*    handleClick={handleItemClick}*/}
                        {/*    id={SectionId.skills}*/}
                        {/*>*/}
                        {/*    Skills*/}
                        {/*</PageNavigationItem>*/}
                        {/*<PageNavigationItem*/}
                        {/*    handleClick={handleItemClick}*/}
                        {/*    id={SectionId.codeExamples}*/}
                        {/*>*/}
                        {/*    Code Examples*/}
                        {/*</PageNavigationItem>*/}
                        {/*<PageNavigationItem*/}
                        {/*    handleClick={handleItemClick}*/}
                        {/*    id={SectionId.aboutMe}*/}
                        {/*>*/}
                        {/*    About Me*/}
                        {/*</PageNavigationItem>*/}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
