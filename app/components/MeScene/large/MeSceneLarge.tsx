"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvasLarge from "@/app/components/MeScene/large/MeCanvasLarge";

export interface MeSceneProps {}

export default function MeSceneLarge(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                <div className={`h-[100vh] w-full overflow-hidden `}>
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas style={{ width: "135vw" }}>
                        <MeCanvasLarge />
                    </Canvas>
                </div>
            </div>
        </>
    );
}
