import { ForwardedRef, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionProps {
    children: ReactNode;
    startDark?: boolean;
    className?: string;
}

const SectionBackground = forwardRef(function Section(props: SectionProps, ref: ForwardedRef<HTMLDivElement>) {
    return (
        <div
            className={twMerge(
                `bg-gradient-to-b md:mb-0 ${props.startDark ? "from-neutral-900 to-neutral-800" : "from-neutral-800 to-neutral-900"}`,
                props.className
            )}
            ref={ref}
        >
            {props.children}
        </div>
    );
});

export default SectionBackground;
