import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface GridProps {
    children: ReactNode;
    className?: string;
}

const Grid = forwardRef(function Grid(props: GridProps, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div
            ref={ref}
            className={twMerge("page-grid", props.className)}
        >
            {props.children}
        </div>
    );
});

export default Grid;
