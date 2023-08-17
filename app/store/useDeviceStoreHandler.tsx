"use client";

import { useEffect } from "react";
import { Device, useDeviceStore } from "@/app/store/useDeviceStore";
import { KeyValuePair, Screen } from "tailwindcss/types/config";

// Tailwind suggests to resolve config
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
//
// import config from "../../tailwind.config";
// import resolveConfig from "tailwindcss/resolveConfig";
// const { theme } = resolveConfig(config);
//
// Since the unresolved version is enough here, we stick to it and omit the
// issue with the pulled in dependencies
import { theme } from "../../tailwind.config";

// theme!.screens is of type ScreensConfig = string[] | KeyValuePair<string, string | Screen | Screen[]>
// To make indexing possible (like screens.lg) we cast it to KeyValuePair.
// Note that things like theme.colors.black work without that
const screens = theme!.screens as KeyValuePair<string, string | Screen | Screen[]>;

export default function useDeviceStoreHandler() {
    const { setDevice } = useDeviceStore();

    function getDevice() {
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
}
