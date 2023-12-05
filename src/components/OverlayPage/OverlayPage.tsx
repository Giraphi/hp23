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
        <SectionBackground className={"flex flex-col items-end text-white"}>
            <OverlayTopBar title={props.title} />
            <SectionGrid className="max-w-[1200px] self-center xl:mr-[10%]">{props.children}</SectionGrid>
        </SectionBackground>
    );
}
