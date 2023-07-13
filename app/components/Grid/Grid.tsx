import React, { ReactNode } from "react";
import styles from "./grid.module.scss";

export interface GridProps {
    children: ReactNode;
    className?: string;
}

export default function Grid(props: GridProps) {
    return <div className={`${styles.grid} ${props.className}`}>{props.children}</div>;
}
