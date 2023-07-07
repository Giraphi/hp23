import { useCallback, useEffect, useState } from "react";
import useIsFirstRender from "@/app/components/Puzzle/useIsFirstRender";

export interface WindowDimensions {
    width: number;
    height: number;
}

export default function useWindowDimensions(): WindowDimensions {
    const isFirstRender = useIsFirstRender();

    const getWindowDimensions = useCallback(() => {
        if (isFirstRender) {
            return { width: 1450, height: 900 };
        }
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }, [isFirstRender]);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        setWindowDimensions(getWindowDimensions());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [getWindowDimensions]);

    return windowDimensions;
}
