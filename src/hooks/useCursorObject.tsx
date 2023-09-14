import { useFrame, useThree } from "@react-three/fiber";
import { RefObject } from "react";
import { Object3D } from "three/src/core/Object3D";
import useMousePosition from "@/src/hooks/useMousePosition";

const rotateX = 0.0003;
const rotateY = 0.0004;

export default function useCursorObject(objectRef: RefObject<Object3D>, enabled: boolean) {
    const canvasSize = useThree().size;
    const mousePositionRef = useMousePosition(enabled);

    useFrame(() => {
        if (!enabled) {
            return;
        }
        // get the state with static function getState() instead of calling the hook.
        // const { mousePosition } = usePointerStore.getState();

        if (!mousePositionRef.current || !objectRef.current) {
            return;
        }

        objectRef.current.rotation.x = rotateX * (mousePositionRef.current.y - canvasSize.height / 2);
        objectRef.current.rotation.y = rotateY * (mousePositionRef.current.x - canvasSize.width / 2);
    });
}
