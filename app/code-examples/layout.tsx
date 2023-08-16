import React, { ReactNode } from "react";
import BackTopBar from "@/app/components/BackTopBar";

export interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <BackTopBar />
            {props.children}
        </div>
    );
}
