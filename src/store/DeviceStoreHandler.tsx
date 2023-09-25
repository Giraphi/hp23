"use client";

import { useEffect } from "react";
import { Device, useDeviceStore } from "@/src/store/useDeviceStore";
import { KeyValuePair, Screen } from "tailwindcss/types/config";

import { theme } from "../../tailwind.config";

// theme!.screens is of type ScreensConfig = string[] | KeyValuePair<string, string | Screen | Screen[]>
// To make indexing possible (like screens.lg) we cast it to KeyValuePair.
// Note that things like theme.colors.black work without that
const screens = theme!.screens as KeyValuePair<string, string | Screen | Screen[]>;

export interface DeviceStoreHandlerProps {}

export default function DeviceStoreHandler(props: DeviceStoreHandlerProps) {
    const { setDevice } = useDeviceStore();

    function getDevice() {
        if (matchMedia(`(min-width: ${screens.xxl})`).matches) {
            return Device.xxl;
        }
        if (matchMedia(`(min-width: ${screens.xl})`).matches) {
            return Device.xl;
        }
        if (matchMedia(`(min-width: ${screens.lg})`).matches) {
            return Device.lg;
        }
        if (matchMedia(`(min-width: ${screens.md})`).matches) {
            return Device.md;
        }
        return Device.sm;
    }

    useEffect(() => {
        function onResize() {
            setDevice(getDevice());
        }
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [setDevice]);

    return null;
}
