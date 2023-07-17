import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type MousePosition =
    | {
          x: number;
          y: number;
          clientX: number;
          clientY: number;
      }
    | undefined;

type State = {
    mousePosition: MousePosition;
};

type Actions = {
    setMousePosition: (mousePosition: MousePosition) => void;
};

export const usePointerStore = create(
    immer<State & Actions>((set) => ({
        mousePosition: undefined,
        setMousePosition: (mousePosition: MousePosition) =>
            set((state) => {
                state.mousePosition = mousePosition;
            }),
    }))
);
