import Web3 from 'web3';

import {create} from 'ipfs-http-client';
export const ipfs = create('/ip4/127.0.0.1/tcp/5001');

export async function getWeb3() {
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    const web3 = new Web3(window.ethereum);
    return web3;
  }
  console.error('webInit::Metamask not installed');
  return null;
}

export async function initContract(program, web3) {
  if (!web3) {
    console.error(
      'webInit::Error metamask not installed, failed to get provider',
    );
    return null;
  }
  const abi = program.abi;
  const id = await web3.eth.net.getId();
  const address = program.networks[id].address;
  const contract = new web3.eth.Contract(abi, address);
  return contract;
}
