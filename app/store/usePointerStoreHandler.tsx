import { usePointerStore } from "@/app/store/usePointerStore";
import { useEffect, useRef } from "react";

export default function usePointerStoreHandler() {
    const lastDocumentScrollY = useRef(0);
    // setMousePosition is stable
    const setMousePosition = usePointerStore((state) => state.setMousePosition);

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

            // With the store's static getState() function we can get the state instantly within a function flow. Not a hook.
            // This structure is a drastic performance improvement compared to calling
            // const { mousePosition } = usePointerStore();
            // at the top of the component.
            // - Update execution is determined by scroll event, not state change.
            // - We don't have to put mousePosition as a dependency into the effect

            // See
            // - https://codesandbox.io/s/peaceful-johnson-txtws?file=/src/store.js:374-376
            // - https://github.com/pmndrs/zustand#transient-updates-for-often-occurring-state-changes#

            // Note that we prefer getState() over subscribe() in our scenario because update execution is determined by scroll event,
            // not state change.
            const { mousePosition } = usePointerStore.getState();

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
    }, [setMousePosition]);
}
