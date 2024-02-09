import { cn } from "@/util/functions";
import styles from "./styles.module.css";
import { CSSProperties } from "react";

export interface GlitchLinkProps {
    text: string;
    bgColor?: string;
}

export default function GlitchLink(props: GlitchLinkProps) {
    const cssVars = {
        "--bg": props.bgColor || "#000",
    } as CSSProperties;

    return (
        <p
            style={cssVars}
            data-text={props.text}
            className={styles.glitchLink}
        >
            {props.text}
        </p>
    );
}
