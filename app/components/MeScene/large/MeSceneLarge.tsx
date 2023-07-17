"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MeCanvas from "@/app/components/MeScene/MeCanvas";
import { useDeviceStore } from "@/app/store/useDeviceStore";
import MeCanvasLarge from "@/app/components/MeScene/large/MeCanvasLarge";

export interface MeSceneProps {}

export default function MeSceneLarge(props: MeSceneProps) {
    const ref = useRef<HTMLDivElement>(null);

    const device = useDeviceStore((state) => state.device);

    return (
        <>
            <div
                className={"h-full lg:static"}
                ref={ref}
            >
                {/* re-mount the whole canvas. Otherwise we'd have to manually reset all zoom/rotates etc. */}
                <div
                    className={`sticky top-0 h-[100vh] w-full overflow-hidden lg:static`}
                    key={device}
                >
                    {/* Trick to move Canvas Coordinate System off center */}
                    <Canvas style={{ width: "135vw" }}>
                        <MeCanvasLarge />
                    </Canvas>
                </div>
            </div>
        </>
    );
}
