import create from 'zustand';
import {persist} from 'zustand/middleware';

let store = set => ({
  arcanauserinfo: null,
  setarcanauserinfo: data => {
    set({arcanauserinfo: data});
  },
});

let uistore = set => ({
  selectedRoom: null,
  setSelectedRoom: room => {
    set({selectedRoom: room});
  },

  roomBooked: null,
  setRoomBooked: room => {
    set({roomBooked: room, selectedRoom: null});
  },
});

export const useStore = create(persist(store));
export const useUiStore = create(uistore);
