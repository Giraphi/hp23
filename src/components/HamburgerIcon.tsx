import { motion } from "framer-motion";

const firstRectVariants = {
    hamburger: {
        rotate: "0",
    },
    cross: {
        rotate: "45deg",
    },
};

const secondRectVariants = {
    hamburger: {
        rotate: "0",
    },
    cross: {
        rotate: "-45deg",
    },
};

export interface HamburgerIconProps {
    isCross: boolean;
}

export default function HamburgerIcon(props: HamburgerIconProps) {
    return (
        <>
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d={"M10 18h28s2 0 2 2v0s0 2 -2 2h-28s-2 0 -2 -2v0s0 -2 2 -2"}
                    initial={props.isCross ? firstRectVariants.cross : firstRectVariants.hamburger}
                    animate={props.isCross ? firstRectVariants.cross : firstRectVariants.hamburger}
                    style={{ originX: "42%", originY: "50%" }}
                    fill="currentColor"
                    transition={{ ease: "linear", duration: 0.15 }}
                />
                <motion.path
                    d={"M10 26h28s2 0 2 2v0s0 2 -2 2h-28s-2 0 -2 -2v0s0 -2 2 -2"}
                    initial={props.isCross ? secondRectVariants.cross : secondRectVariants.hamburger}
                    animate={props.isCross ? secondRectVariants.cross : secondRectVariants.hamburger}
                    style={{ originX: "42%", originY: "50%" }}
                    fill="currentColor"
                    transition={{ ease: "linear", duration: 0.15 }}
                />
            </svg>
        </>
    );
}
