import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}
interface State1 {
  isDropDownOpen: boolean;
  openDropDown: () => void;
  closeDropDown: () => void;
  toggleDropDown: () => void;
}
interface State2 {
  isDropDownOpenC: boolean;
  openDropDownC: () => void;
  closeDropDownC: () => void;
  toggleDropDownC: () => void;
}
interface State3 {
  isDropDownOpenMarcas: boolean;
  openDropDownMarcas: () => void;
  closeDropDownMarcas: () => void;
  toggleDropDownMarcas: () => void;
}
export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));

export const useUIDropStore = create<State1>((set) => ({
  isDropDownOpen: false,

  openDropDown: () => set({ isDropDownOpen: true }),
  closeDropDown: () => set({ isDropDownOpen: false }),
  toggleDropDown: () =>
    set((state) => ({ isDropDownOpen: !state.isDropDownOpen })),
}));
export const useUIDropStoreCategory = create<State2>((set) => ({
  isDropDownOpenC: false,

  openDropDownC: () => set({ isDropDownOpenC: true }),
  closeDropDownC: () => set({ isDropDownOpenC: false }),
  toggleDropDownC: () =>
    set((state) => ({ isDropDownOpenC: !state.isDropDownOpenC })),
}));

export const useUIDropStoreMarcas = create<State3>((set) => ({
  isDropDownOpenMarcas: false,

  openDropDownMarcas: () => set({ isDropDownOpenMarcas: true }),
  closeDropDownMarcas: () => set({ isDropDownOpenMarcas: false }),
  toggleDropDownMarcas: () =>
    set((state) => ({ isDropDownOpenMarcas: !state.isDropDownOpenMarcas })),
}));
