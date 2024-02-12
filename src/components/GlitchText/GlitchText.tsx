import { cn } from "@/util/functions";
import styles from "./styles.module.scss";
import { CSSProperties, ReactNode } from "react";

export interface GlitchLinkProps {
    bgColor?: string;
    isActive?: boolean;
    children?: ReactNode;
}

export default function GlitchText(props: GlitchLinkProps) {
    const cssVars = {
        "--bg": props.bgColor || "#000",
    } as CSSProperties;

    return (
        <span
            style={cssVars}
            className={cn(styles.glitchLink, { "is-active": props.isActive }, "flex")}
        >
            <span className={styles.glitchB}>{props.children}</span>
            {props.children}
            <span className={styles.glitchA}>{props.children}</span>
        </span>
    );
}
