import { useFrame, useThree } from "@react-three/fiber";
import { RefObject } from "react";
import { Object3D } from "three/src/core/Object3D";
import { usePointerStore } from "@/app/store/usePointerStore";

const rotateX = 0.0003;
const rotateY = 0.0004;

export default function useCursorObject(objectRef: RefObject<Object3D>, enabled: boolean) {
    const canvasSize = useThree().size;

    useFrame(() => {
        // get the state with static function getState() instead of calling the hook.
        const { mousePosition } = usePointerStore.getState();

        if (!enabled || !mousePosition || !objectRef.current) {
            return;
        }

        objectRef.current.rotation.x = rotateX * (mousePosition.y - canvasSize.height / 2);
        objectRef.current.rotation.y = rotateY * (mousePosition.x - canvasSize.width / 2);
    });
}
