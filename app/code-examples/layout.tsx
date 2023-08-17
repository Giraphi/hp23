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
            <BackTopBar title={"Code Examples"} />
            <PageNavigation
                visible={true}
                alwaysOpenOnXl={true}
                items={[
                    { id: SectionId.puzzle, label: "Puzzle Slider" },
                    { id: SectionId.zoom, label: "Zoom into Text" },
                ]}
            />
            {props.children}
        </div>
    );
}
