import { ForwardedRef, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { GridProps } from "@/app/components/Grid/Grid";

export interface SectionProps {
    children: ReactNode;
    startDark?: boolean;
    className?: string;
}

const SectionBackground = forwardRef(function Section(props: SectionProps, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div
            className={twMerge(`bg-gradient-to-b ${props.startDark ? "from-gray-2 to-gray-3" : "from-gray-3 to-gray-2"}`, props.className)}
            ref={ref}
        >
            {props.children}
        </div>
    );
});

export default SectionBackground;
