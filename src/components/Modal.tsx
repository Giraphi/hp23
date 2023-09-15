"use client";

import { Modal as MuiModal } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface ModalProps {
    open?: boolean;
    children?: ReactNode;
}

export default function Modal(props: ModalProps) {
    const router = useRouter();

    function handleClose() {
        router.push("/");
    }

    return (
        <MuiModal
            open={!!props.open}
            onClose={handleClose}
        >
            <div>{props.children}</div>
        </MuiModal>
    );
}
