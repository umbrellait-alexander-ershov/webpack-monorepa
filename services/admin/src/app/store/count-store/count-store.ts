import { create } from "zustand";
import type { CountStoreTypes } from "./count-store.types";

export const useCountStore = create<CountStoreTypes>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));
