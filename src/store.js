import Web3 from 'web3';
import create from 'zustand';
import {getWeb3} from './webInit';

let store = set => ({
  web3: new Web3(window.ethereum),
  loadWeb3: async () => {
    getWeb3().then(result => {
      set({web3: result});
    });
  },
});

export const useStore = create(store);
