"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvasLarge from "@/app/components/Sections/Intro/MeScene/large/MeCanvasLarge";

export interface MeSceneProps {}

export default function MeSceneLarge(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                <div className={`relative h-screen w-full overflow-hidden`}>
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas style={{ width: "135vw" }}>
                        <MeCanvasLarge />
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
