import React from "react";

export interface RandomContextType {
    randomSeed: number;
    getRandom: (min?: number, max?: number) => number;
}

export const RandomContext = React.createContext<RandomContextType>({
    randomSeed: 1,
    getRandom: () => 0,
});

export default RandomContext;
