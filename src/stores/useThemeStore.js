import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

const THEME_KEY = 'theme';

const useThemeStore = create((set, get) => ({
  theme: 'light',
  hydrateDone: false,
  hydrate: async () => {
    try {
      const saved = await AsyncStorage.getItem(THEME_KEY);
      if (saved) set({ theme: saved });
    } catch {}
    set({ hydrateDone: true });
  },
  toggleTheme: async () => {
    const next = get().theme === 'dark' ? 'light' : 'dark';
    set({ theme: next });
    try {
      await AsyncStorage.setItem(THEME_KEY, next);
    } catch {}
  }
}));

// hydrate immediately
useThemeStore.getState().hydrate();

export default useThemeStore;
