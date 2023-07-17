import { usePointerStore } from "@/app/store/usePointerStore";
import { useEffect, useRef } from "react";

export default function usePointerStoreHandler() {
    const { mousePosition, setMousePosition } = usePointerStore();
    const lastDocumentScrollY = useRef(0);

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            const mousePosition = {
                x: e.pageX,
                y: e.pageY,
                clientX: e.clientX,
                clientY: e.clientY,
            };

            setMousePosition(mousePosition);
        }

        function onTouchStart(e: TouchEvent) {
            const mousePosition = {
                x: e.targetTouches[0].pageX,
                y: e.targetTouches[0].pageY,
                clientX: e.targetTouches[0].clientX,
                clientY: e.targetTouches[0].clientY,
            };

            setMousePosition(mousePosition);
        }

        function onScroll() {
            const deltaY = window.scrollY - lastDocumentScrollY.current;
            if (deltaY === 0) {
                return;
            }

            if (!mousePosition) {
                return;
            }

            const mousePositionUpdate = {
                x: mousePosition.x,
                y: mousePosition.y + deltaY,
                clientX: mousePosition.clientX,
                clientY: mousePosition.clientY,
            };
            setMousePosition(mousePositionUpdate);
            lastDocumentScrollY.current = window.scrollY;
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("scroll", onScroll);
        window.addEventListener("touchstart", onTouchStart);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("touchstart", onTouchStart);
        };
    }, [mousePosition, setMousePosition]);
}
