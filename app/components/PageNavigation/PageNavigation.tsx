"use client";

import { useEffect, useState } from "react";
import { SectionId } from "@/app/store/useActiveSectionStore";
import { AnimatePresence, motion } from "framer-motion";
import PageNavigationItem from "@/app/components/PageNavigation/PageNavigationItem";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { cn } from "@/app/util/functions";

type Item = { id: SectionId; label: string };

export interface PageNavigationProps {
    visible: boolean;
    items: Item[];
    alwaysOpenOnXl?: boolean;
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
    useDeviceStoreHandler();
    const { device } = useDeviceStore();
    const keepOpen = device >= Device.xl && props.alwaysOpenOnXl;
    const [isOpen, setIsOpen] = useState(!!keepOpen);

    useEffect(() => {
        setIsOpen(!!keepOpen);
    }, [keepOpen]);

    const ref = useOutsideClick(() => {
        if (keepOpen) {
            return;
        }
        setIsOpen(false);
    });

    function handleItemClick() {
        if (keepOpen) {
            return;
        }
        setIsOpen(false);
    }

    return (
        <nav
            className={"fixed right-0 top-0 z-30 grid justify-items-end"}
            ref={ref}
        >
            {!keepOpen && (
                <div
                    className={cn(
                        `relative z-20 col-start-1 row-start-1 flex h-10 w-10 cursor-pointer flex-col justify-between
                        rounded-bl-md bg-black py-[0.9rem]  pl-[0.4rem] pr-[0.3rem]
                        transition-opacity md:h-12 md:w-12 md:py-[1.1rem] md:pl-[0.5rem] md:pr-[0.5rem]`,
                        props.visible || isOpen ? "opacity-1" : "opacity-0"
                    )}
                    onClick={() => setIsOpen((x) => !x)}
                >
                    <div
                        className={cn(`h-[0.2rem] w-full rounded-sm bg-white transition-transform md:h-1`, {
                            "translate-y-[0.25rem] rotate-45 md:translate-y-[0.3rem]": isOpen,
                        })}
                    />
                    <div
                        className={cn(`h-[0.2rem] w-full rounded-sm bg-white transition-transform md:h-1`, {
                            "-translate-y-[0.25rem] -rotate-45 md:-translate-y-[0.3rem]": isOpen,
                        })}
                    />
                </div>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`relative z-10 col-start-1 row-start-1 flex h-[100lvh] flex-col items-end ${
                            keepOpen ? "bg-transparent" : "bg-black"
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
