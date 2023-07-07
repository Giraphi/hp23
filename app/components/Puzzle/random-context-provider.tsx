import React, { useRef } from "react";
import RandomContext from "./random-context";

export interface RenderContextProviderProps {
    children: React.ReactNode;
    randomSeed: number;
}

export default function RandomContextProvider(props: RenderContextProviderProps) {
    const seed = useRef(props.randomSeed);

    function getRandom(min = 0, max = 0.999) {
        function sinusRandom() {
            const x = Math.sin(seed.current) * 10000;
            seed.current++;
            return x - Math.floor(x);
        }

        const random = sinusRandom();
        return Math.round((random * (max - min) + min) * 100) / 100;
    }

    return <RandomContext.Provider value={{ randomSeed: props.randomSeed, getRandom }}>{props.children}</RandomContext.Provider>;
}
