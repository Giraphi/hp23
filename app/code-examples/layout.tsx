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
                hamburgerClasses={"bg-transparent"}
                menuClasses={"bg-gray-1 xl:bg-transparent mt-10 pt-10 md:mt-0 md:pt-16 lg:pt-24"}
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
