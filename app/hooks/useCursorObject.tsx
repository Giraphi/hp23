import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";
import { Object3D } from "three/src/core/Object3D";
import { usePointerStore } from "@/app/store/usePointerStore";

const rotateX = 0.0003;
const rotateY = 0.0004;

export default function useCursorObject(objectRef: RefObject<Object3D>, enabled: boolean) {
    const canvasSize = useThree().size;
    const mousePositionRef = useRef(usePointerStore.getState().mousePosition);
    useEffect(() => usePointerStore.subscribe((state) => (mousePositionRef.current = state.mousePosition)), []);

    useFrame(() => {
        if (!enabled || !mousePositionRef || !mousePositionRef.current || !objectRef.current) {
            return;
        }

        objectRef.current.rotation.x = rotateX * (mousePositionRef.current.clientY - canvasSize.height / 2);
        objectRef.current.rotation.y = rotateY * (mousePositionRef.current.clientX - canvasSize.width / 2);
    });
}
