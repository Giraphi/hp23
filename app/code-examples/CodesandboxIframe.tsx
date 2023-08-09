"use client";

import React, { useLayoutEffect } from "react";

export interface CodesandboxIframeProps {
    src: string;
    // files: string[];
}

export default function CodesandboxIframe(props: CodesandboxIframeProps) {
    // const files = encodeURIComponent(props.files.join(","));

    // const files = props.files.map((path) => `file=${encodeURIComponent(path)}`);
    // const filesParameter = files.join("&");
    // console.log(filesParameter);
    // console.log("!!!!");

    useLayoutEffect(() => {
        // CSB/LAYOUT/0.5/Giraphi/scroll/main
        localStorage.setItem("https://codesandbox.io/", "");
    });

    return (
        <iframe
            style={{ width: "100%", height: "85vh", minHeight: "800px" }}
            src={props.src}
            allowFullScreen
        ></iframe>
    );
}
