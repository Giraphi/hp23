import React, { ReactNode } from "react";
import BackTopBar from "@/app/components/BackTopBar";
import PageNavigation from "@/app/components/PageNavigation/PageNavigation";
import { SectionId } from "@/app/store/useActiveSectionStore";

export interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <PageNavigation
                visible={true}
                alwaysOpen={true}
                lightBackground={true}
                items={[
                    { id: SectionId.puzzle, label: "Puzzle Slider" },
                    { id: SectionId.zoom, label: "Scroll Animation" },
                ]}
            />
            <BackTopBar title={"Code Examples"} />
            {props.children}
        </div>
    );
}
