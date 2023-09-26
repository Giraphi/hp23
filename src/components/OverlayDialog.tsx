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

export default function OverlayDialog(props: ModalProps) {
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
            className={"md:ml-[17%] [&>.MuiBackdrop-root]:backdrop-blur-sm"}
        >
            {props.children}
        </Dialog>
    );
}
