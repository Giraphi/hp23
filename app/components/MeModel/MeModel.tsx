"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import MeContent from "@/app/components/MeModel/MeContent";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import styles from "./meModel.module.scss";

export interface MeModelProps {}

export default function MeModel(props: MeModelProps) {
    const device = useDeviceStore((state) => state.device);

    return (
        <>
            <div className={`h-full w-full overflow-hidden`}>
                {/* Trick to move Canvas Coordinate System off center */}
                <Canvas className={styles.canvasWrapper}>
                    <MeContent />
                </Canvas>
            </div>
            <p>Rotate with two fingers</p>
            <p>Zoom with zoom gesture</p>
        </>
    );
}
