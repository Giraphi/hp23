"use client";

import { Modal as MuiModal } from "@mui/material";
import ConsultingGroupModal from "@/src/app/components/ConsultingGroupModal";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface ModalProps {
    modalKey?: string;
    children?: ReactNode;
}

export default function Modal(props: ModalProps) {
    const router = useRouter();

    function handleClose() {
        router.push("/");
    }

    return (
        <MuiModal
            open={!!props.modalKey}
            onClose={handleClose}
        >
            <div>{props.children}</div>
        </MuiModal>
    );
}
