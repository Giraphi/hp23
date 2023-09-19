"use client";

import { Dialog, Slide, SlideProps } from "@mui/material";
import { useRouter } from "next/navigation";
import { forwardRef, ReactNode } from "react";

const Transition = forwardRef<unknown, SlideProps>((props, ref) => (
    <Slide
        direction="left"
        ref={ref}
        {...props}
    />
));
Transition.displayName = "Transition";

export interface ModalProps {
    open?: boolean;
    children?: ReactNode;
}

export default function OverlayPage(props: ModalProps) {
    const router = useRouter();

    function handleClose() {
        router.push("/");
    }

    return (
        <Dialog
            open={!!props.open}
            onClose={handleClose}
            fullScreen
            TransitionComponent={Transition}
            className={"text-white md:ml-[10%]"}
        >
            {props.children}
        </Dialog>
    );
}
