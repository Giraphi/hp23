import React, { RefObject } from "react";

export interface MousePositionContextType {
    mousePositionRef?: RefObject<{ x: number; y: number } | undefined>;
}

export const MousePositionContext = React.createContext<MousePositionContextType>({});

export default MousePositionContext;
