import { useEffect, useRef } from "react";

export default function useOutsideClick(callback: () => void) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [callback]);

    return ref;
}
