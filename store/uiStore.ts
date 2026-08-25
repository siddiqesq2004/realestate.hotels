import { create } from 'zustand';

interface UIState {
  isNavHidden: boolean;
  setNavHidden: (hidden: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isNavHidden: false,
  setNavHidden: (hidden) => set({ isNavHidden: hidden }),
}));
