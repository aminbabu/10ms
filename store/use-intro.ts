import { create } from "zustand";

export interface IIntroStore {
  height: number;
  setHeight: (height: string) => void;
}

export const useIntroStore = create<IIntroStore>((set) => ({
  height: 0,
  setHeight: (height) => set({ height }),
}));
