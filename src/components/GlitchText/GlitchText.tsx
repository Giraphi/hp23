import styles from "./styles.module.css";
import { CSSProperties } from "react";

export interface GlitchLinkProps {
    text: string;
    bgColor?: string;
}

export default function GlitchText(props: GlitchLinkProps) {
    const cssVars = {
        "--bg": props.bgColor || "#000",
    } as CSSProperties;

    return (
        <span
            style={cssVars}
            data-text={props.text}
            className={styles.glitchLink}
        >
            {props.text}
        </span>
    );
}
