import create from 'zustand';
import {persist} from 'zustand/middleware';

let store = set => ({
  arcanaUserInfo: null,
  setArcanaUserInfo: data => {
    set({arcanaUserInfo: data});
  },
});

export const useStore = create(persist(store));
