"use client";

import { useEffect, useState } from "react";
import { SectionId } from "@/store/useActiveSectionStore";
import { AnimatePresence, motion } from "framer-motion";
import PageNavigationItem from "@/components/PageNavigation/PageNavigationItem";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Device, useDeviceStore } from "@/store/useDeviceStore";
import { cn } from "@/util/functions";
import { useHomeStore } from "@/store/useHomeStore";
import MenuIcon from "@/components/MenuIcon";

type Item = { id: SectionId; label: string };

export interface PageNavigationProps {
    items: Item[];
    alwaysOpenOnXl?: boolean;
    hamburgerClasses?: string;
    menuClasses?: string;
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

export default function PageNavigation(props: PageNavigationProps) {
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
                    onClick={() => setIsOpen((x) => !x)}
                    className={
                        "relative z-20 col-start-1 row-start-1 h-10 w-10 cursor-pointer rounded-bl-md bg-neutral-950 md:h-12 md:w-12"
                    }
                >
                    <MenuIcon isCross={isOpen} />
                </div>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={cn(
                            `relative z-10 col-start-1 row-start-1 flex h-[100lvh] flex-col items-end bg-neutral-950 pl-6 pr-3 pt-16 lg:pt-24`,
                            props.menuClasses
                        )}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
