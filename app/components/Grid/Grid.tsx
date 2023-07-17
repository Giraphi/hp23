import React, { ForwardedRef, forwardRef, MutableRefObject, ReactNode } from "react";
import styles from "./grid.module.scss";

export interface GridProps {
    children: ReactNode;
    className?: string;
}

const Grid = forwardRef(function Grid(props: GridProps, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div
            ref={ref}
            className={`${styles.grid} ${props.className}`}
        >
            {props.children}
        </div>
    );
});

export default Grid;
