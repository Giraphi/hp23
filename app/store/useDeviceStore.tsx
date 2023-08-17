import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum Device {
    sm,
    md,
    lg,
    xl,
}

type State = {
    device: Device;
};

type Actions = {
    setDevice: (device: Device) => void;
};

export const useDeviceStore = create(
    immer<State & Actions>((set) => ({
        device: Device.lg,
        setDevice: (device: Device) =>
            set((state) => {
                state.device = device;
            }),
    }))
);
