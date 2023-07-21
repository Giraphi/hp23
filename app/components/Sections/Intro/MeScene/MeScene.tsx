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
    const { device } = useDeviceStore();
    const heightPercentage = props.textContentHeight / windowHeight;
    const start = device <= Device.sm ? heightPercentage - 0.35 : heightPercentage - 0.25;
    const end = 1.3;

    const y = useTransform(props.scrollYProgress, [0, 1], [`${Math.floor(start * 100)}lvh`, `${Math.floor(end * 100)}lvh`]);

    return (
        <>
            <div className={`h-full w-full pt-[200px]`}>
                <Parallax
                    strength={200}
                    className={"h-[115lvh] [&>*]:w-full"}
                >
                    <Background className={"h-[130lvh]"}>
                        <div className={"flex h-full items-center"}>
                            <Canvas className={"touch-action-y h-lvh]"}>
                                <MeCanvas scrollProgress={props.scrollYProgress} />
                            </Canvas>
                        </div>
                        <div className={"h-full bg-lime"}>
                            <p>hello</p>HELLOxxx
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                            <p>hello</p>HELLO
                        </div>
                    </Background>
                    {/*<Background className="custom-bg">*/}
                    {/*    <Canvas className={"touch-action-y"}>*/}
                    {/*        <MeCanvas scrollProgress={props.scrollYProgress} />*/}
                    {/*    </Canvas>*/}
                    {/*</Background>*/}
                </Parallax>
                {/*<motion.div*/}
                {/*    className={`h-lvh w-full overflow-hidden`}*/}
                {/*    style={{ y }}*/}
                {/*>*/}
                {/*    <Canvas className={"touch-action-y"}>*/}
                {/*        <MeCanvas scrollProgress={props.scrollYProgress} />*/}
                {/*    </Canvas>*/}
                {/*</motion.div>*/}
            </div>
        </>
    );
}
