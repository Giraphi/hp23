import { cn } from "@/util/functions";
import styles from "./styles.module.scss";
import { CSSProperties } from "react";

export interface GlitchLinkProps {
    text: string;
    bgColor?: string;
    isActive?: boolean;
}

export default function GlitchText(props: GlitchLinkProps) {
    const cssVars = {
        "--bg": props.bgColor || "#000",
    } as CSSProperties;

    return (
        <span
            style={cssVars}
            data-text={props.text}
            className={cn(styles.glitchLink, { "is-active": props.isActive })}
        >
            <span className={styles.glitchB}>{props.text}</span>
            {props.text}
            <span className={styles.glitchA}>{props.text}</span>
        </span>
    );
}
