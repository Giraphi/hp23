"use client";
import { PageProps } from "@/app/puzzle/page";
import { useScroll, useTransform, motion, useMotionTemplate, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";

export default function Page(props: PageProps) {
    useDeviceStoreHandler();

    // Stackblitz: Embed only works in chromium based browsers

    // Currently best approach to embed github code:
    // Codesandbox: Modify github url by adding 'box' after github:
    // https://github.com/Giraphi/scroll -> https://githubbox.com/Giraphi/scroll

    const { device } = useDeviceStore();

    return (
        <>
            {/*{device < Device.md ? (*/}
            {/*    <iframe*/}
            {/*        style={{*/}
            {/*            width: "100%",*/}
            {/*            height: 300,*/}
            {/*            border: 0,*/}
            {/*            marginBottom: 16,*/}
            {/*            zIndex: 100,*/}
            {/*        }}*/}
            {/*        src="https://stackblitz.com/github/Giraphi/scroll?embed=1&file=README.md&hideExplorer=1&theme=dark&view=preview"*/}
            {/*    ></iframe>*/}
            {/*) : (*/}
            {/*    <iframe*/}
            {/*        style={{*/}
            {/*            width: "100%",*/}
            {/*            height: 700,*/}
            {/*            border: 0,*/}
            {/*            marginBottom: 16,*/}
            {/*            zIndex: 100,*/}
            {/*        }}*/}
            {/*        src="https://stackblitz.com/github/Giraphi/scroll?embed=1&file=src%2FScrollCover%2FScrollCover.tsx&theme=dark"*/}
            {/*    ></iframe>*/}
            {/*)}*/}

            {/*<iframe*/}
            {/*    style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;"*/}
            {/*    width="800"*/}
            {/*    height="450"*/}
            {/*    src="https://codesandbox.io/p/sandbox/github/Giraphi/scroll/tree/main?embed=1"*/}
            {/*    allowFullScreen*/}
            {/*></iframe>*/}

            {/*<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450"*/}
            {/*        src="https://codesandbox.io/p/sandbox/github/Giraphi/scroll/tree/main?embed=1" allowFullScreen></iframe>*/}

            {/* options see https://codesandbox.io/docs/learn/sandboxes/embedding?tab=browser-sandboxes*/}
            {/*embed=1&autoresize=1&codemirror=1&eslint=0*/}
            <iframe
                width="100%"
                height="650"
                src="https://codesandbox.io/p/sandbox/github/Giraphi/scroll/tree/main?embed=1&hidedevtools=1"
                allowFullScreen
            ></iframe>
        </>
    );
}
