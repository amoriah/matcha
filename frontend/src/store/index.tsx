import { create } from 'zustand';

export interface IStore {
  isAuth: boolean;
  setIsAuth: (payload: boolean) => void;
}

export const useStore = create<IStore>()(set => ({
  isAuth: false,
  setIsAuth: (payload) => set({ isAuth: payload }),
}));
