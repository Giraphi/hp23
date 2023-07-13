import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum Device {
    sm,
    md,
    lg,
    xlg,
}

type State = {
    device: Device;
};

type Actions = {
    setDevice: (device: Device) => void;
};

export const useDeviceStore = create(
    immer<State & Actions>((set) => ({
        device: 2,
        setDevice: (device: Device) =>
            set((state) => {
                state.device = device;
            }),
    }))
);
