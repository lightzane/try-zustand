import { create } from 'zustand';

type Tabs = 'todo' | 'done';

type TabState = {
  active: Tabs;
  setActive: (active: Tabs) => void;
};

export const useTabStore = create<TabState>()((set) => ({
  active: 'todo', // initial
  setActive: (active) => set(() => ({ active })),
}));
