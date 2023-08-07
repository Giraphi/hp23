"use client";
import { useDeviceStore } from "@/app/store/useDeviceStore";
import useDeviceStoreHandler from "@/app/store/useDeviceStoreHandler";

export default function Page() {
    useDeviceStoreHandler();

    // Stackblitz: Embed only works in chromium based browsers
    //
    // Codesandbox: Seems to have two different views: normal and new.
    // Normal: Codesandbox as we know it so far ("Browser Sandbox")
    // New: optimized for github repos ("Cloud Sandbox")
    // but seems to be more or less under development.
    // https://codesandbox.io/docs/learn/sandboxes/embedding?tab=cloud-sandboxes
    //
    // - VM sometimes doesn't start?
    // - file icons don't work (or are they ment to be like this?)
    // - share -> iframe embed button sometimes not there
    // - if it is there, we don't have a UI to adjust iframe-parameters
    // - parameters don't work even if we set them to the path manually
    // - has a lot of buttons/functionality fot git (commit, view history etc.)
    //
    // Best approach: Copy-paste code to a "normal" sandbox

    // const { device } = useDeviceStore();

    return (
        <>
            <iframe
                width="100%"
                height="750"
                src="https://codesandbox.io/p/sandbox/github/Giraphi/scroll/tree/main?file=%2Fsrc%2FScrollCover%2FScrollCover.tsx%3A7%2C40&embed=1"
                allowFullScreen
            ></iframe>
        </>
    );
}
