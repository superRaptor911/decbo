import {getWeb3, initContract} from '../webInit';
import UserContact from '../contracts/UserContact.json';
import RoomContract from '../contracts/Rooms.json';

export async function registerUser(username, email, phone) {
  const web3 = await getWeb3();
  const contract = await initContract(UserContact, web3);
  const addresses = await web3.eth.getAccounts();

  try {
    await contract.methods.addUser(addresses[0], username, email, phone).send({
      from: addresses[0],
    });
  } catch (e) {
    /* handle error */
    console.error('api::Failed to register user', e);
    throw 'FAILED TO REGISTER';
  }
}

export async function addRoom(
  name,
  city,
  state,
  country,
  description,
  roomCapacity,
  previewImages,
) {
  const web3 = await getWeb3();
  const contract = await initContract(RoomContract, web3);
  const addresses = await web3.eth.getAccounts();

  try {
    await contract.methods
      .addRoom(
        name,
        city,
        state,
        country,
        description,
        roomCapacity,
        previewImages[0],
      )
      .send({
        from: addresses[0],
      });
  } catch (e) {
    /* handle error */
    console.error('api::Failed to add room', e);
    throw 'FAILED TO Add Rooms';
  }
}

export async function getLatestRooms(page = 0) {
  const web3 = await getWeb3();
  const contract = await initContract(RoomContract, web3);

  try {
    const rooms = await contract.methods.getLatestRooms(page).call();
    return rooms;
  } catch (e) {
    /* handle error */
    console.error('api::Failed to get latest room', e);
    throw 'FAILED TO Get rooms';
  }
}

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export async function uploadFiles(files) {
  const fileBuffers = [];
  for (let file of files) {
    const data = await readFileAsync(file);
    fileBuffers.push({
      buffer: data,
      size: file.size,
      type: file.type,
    });
  }
  return fileBuffers;
}
