import { useEffect, useRef } from "react";

export type MousePosition =
    | {
          x: number;
          y: number;
          clientX: number;
          clientY: number;
      }
    | undefined;

export default function useMousePosition(enabled: boolean) {
    const lastDocumentScrollY = useRef(0);
    const mousePositionRef = useRef<MousePosition>(undefined);

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            mousePositionRef.current = {
                x: e.pageX,
                y: e.pageY,
                clientX: e.clientX,
                clientY: e.clientY,
            };
        }

        function onTouchStart(e: TouchEvent) {
            mousePositionRef.current = {
                x: e.targetTouches[0].pageX,
                y: e.targetTouches[0].pageY,
                clientX: e.targetTouches[0].clientX,
                clientY: e.targetTouches[0].clientY,
            };
        }

        function onScroll() {
            const deltaY = window.scrollY - lastDocumentScrollY.current;
            if (deltaY === 0) {
                return;
            }

            if (!mousePositionRef.current) {
                return;
            }

            mousePositionRef.current = {
                x: mousePositionRef.current.x,
                y: mousePositionRef.current.y + deltaY,
                clientX: mousePositionRef.current.clientX,
                clientY: mousePositionRef.current.clientY,
            };
            lastDocumentScrollY.current = window.scrollY;
        }

        if (enabled) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("scroll", onScroll);
            window.addEventListener("touchstart", onTouchStart);
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("touchstart", onTouchStart);
        };
    }, [enabled]);

    return mousePositionRef;
}
