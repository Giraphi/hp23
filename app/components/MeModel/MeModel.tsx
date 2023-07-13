"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import MeContent from "@/app/components/MeModel/MeContent";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";

export interface MeModelProps {}

export default function MeModel(props: MeModelProps) {
    const device = useDeviceStore((state) => state.device);

    return (
        <div className={"h-full w-full overflow-hidden"}>
            {/* Trick to move Canvas Coordinate System off center */}
            <Canvas style={device >= Device.md ? { width: "135vw" } : {}}>
                <MeContent />
            </Canvas>
        </div>
    );
}
