import { create } from "zustand";

export interface ISearchStore {
  isOpen: boolean;
  search: string;
  toggle: () => void;
  open: () => void;
  close: () => void;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<ISearchStore>((set) => ({
  isOpen: false,
  search: "",
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setSearch: (search) => set({ search }),
}));
