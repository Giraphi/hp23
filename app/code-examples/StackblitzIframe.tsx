"use client";

import React from "react";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface StackblitzIframeProps {
    src: string;
    files: string[];
}

export default function StackblitzIframe(props: StackblitzIframeProps) {
    const files = encodeURIComponent(props.files.join(","));
    useDeviceStoreHandler();
    const { device } = useDeviceStore();

    const view = device <= Device.md ? "editor" : "both";

    return (
        <iframe
            src={`${props.src}?embed=1&hidenavigation=1&file=${files}&hideExplorer=1&terminalHeight=0&view=${view}`}
            style={{ width: "100%", height: "70vh" }}
        ></iframe>
    );
}
