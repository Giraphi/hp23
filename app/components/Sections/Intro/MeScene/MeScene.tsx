"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/Sections/Intro/MeScene/MeCanvas";
import { MotionValue, motion, useTransform, useScroll } from "framer-motion";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { Background, Parallax } from "react-parallax";

export interface MeSceneProps {
    scrollYProgress: MotionValue<number>;
    textContentHeight: number;
}

export default function MeScene(props: MeSceneProps) {
    const windowHeight = typeof window !== "undefined" ? window.outerHeight : 99999;
    const contentHeightVH = (props.textContentHeight / windowHeight) * 100;

    const spaceTop = `${contentHeightVH - 50}lvh`;
    const strength = Math.floor(windowHeight * 0.82);

    return (
        <>
            <div
                className={`h-full w-full`}
                style={{ paddingTop: spaceTop }}
            >
                {/*
                Normally we'd do the parallax-effect with framer-motion. However in this scenario this results in a laggy movement.
                This seems to be because of some characteristics of the 3D rendering esp. AsciiRenderer when the canvas is moved over the page.
                */}
                <Parallax
                    strength={strength}
                    className={"h-full [&>*]:w-full"}
                >
                    <Background>
                        <div className={"flex h-[150lvh] items-center py-[25lvh]"}>
                            <Canvas
                                gl={{ antialias: false, alpha: true, precision: "lowp", powerPreference: "low-power" }}
                                className={"touch-action-y"}
                            >
                                <MeCanvas scrollProgress={props.scrollYProgress} />
                            </Canvas>
                        </div>
                    </Background>
                </Parallax>
            </div>
        </>
    );
}
