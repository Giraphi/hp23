import React, { forwardRef, ReactNode } from "react";
import styles from "./grid.module.scss";

export interface GridProps {
    children: ReactNode;
    className?: string;
}

const Grid = forwardRef(function Grid(props: GridProps) {
    return <div className={`${styles.grid} ${props.className}`}>{props.children}</div>;
});

export default Grid;
