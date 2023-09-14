"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvasLarge from "@/src/components/Sections/Intro/MeScene/large/MeCanvasLarge";
import { useInView } from "framer-motion";

export interface MeSceneProps {}

export default function MeSceneLarge(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                <div className={`relative h-screen w-full overflow-hidden`}>
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas
                        style={{ width: "135vw" }}
                        frameloop={inView ? "always" : "never"}
                    >
                        <MeCanvasLarge isActive={inView} />
                    </Canvas>

                    {/*<div className={"absolute bottom-[15vh] right-[20vw] z-10 flex justify-center"}>*/}
                    {/*    <input*/}
                    {/*        id="default-range"*/}
                    {/*        type="range"*/}
                    {/*        value="50"*/}
                    {/*        className="h-2 w-40 cursor-pointer appearance-none rounded-lg bg-black accent-white"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
}
