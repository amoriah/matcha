import { useStore } from '@store';

export const login = async () => useStore.getState().setIsAuth(true);

export const logout = async () => useStore.getState().setIsAuth(false);
