import SectionBackground from "@/components/SectionBackground";
import SectionGrid from "@/components/SectionGrid";
import { ReactNode } from "react";
import OverlayTopBar from "@/components/OverlayPage/OverlayTopBar";

export interface OverlayPageProps {
    children: ReactNode;
    title?: string;
}

export default function OverlayPage(props: OverlayPageProps) {
    return (
        <SectionBackground className={"text-white"}>
            <OverlayTopBar title={props.title} />
            <SectionGrid>{props.children}</SectionGrid>
        </SectionBackground>
    );
}
