import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import { ReactNode } from "react";
import OverlayTopBar from "@/src/components/OverlayPage/OverlayTopBar";

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
