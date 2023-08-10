import { useState } from "react";

export interface TopBarProps {
    visible: boolean;
}

export default function TopBar(props: TopBarProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav
            className={`fixed left-0 top-0 z-40 flex  h-12 w-12 flex-col justify-between rounded-br-md bg-black px-2 py-[1.1rem] ${
                props.visible ? "opacity-1" : "opacity-0"
            } transition-opacity`}
            onClick={() => setIsOpen((x) => !x)}
        >
            <div className={`h-1 w-full bg-white transition-transform ${isOpen ? "translate-y-[0.3rem] rotate-45" : ""}`} />
            <div className={`h-1 w-full bg-white transition-transform ${isOpen ? "-translate-y-[0.3rem] -rotate-45" : ""}`} />
        </nav>
    );
}
