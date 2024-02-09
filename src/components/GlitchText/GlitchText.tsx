import { cn } from "@/util/functions";
import styles from "./styles.module.css";
import { CSSProperties, ReactNode } from "react";
import Link from "next/link";

export interface GlitchLinkProps {
    text: string;
    bgColor?: string;
}

export default function GlitchText(props: GlitchLinkProps) {
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
