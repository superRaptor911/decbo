import React, {Fragment, useEffect, useState} from 'react';
import {getLatestRooms} from '../api/api';
import {useUiStore} from '../store';
import RoomCard from './RoomCard';

const LatestRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();
  const uiSetSelectedRoom = useUiStore(state => state.setSelectedRoom);

  useEffect(() => {
    getLatestRooms().then(result => {
      setRooms(result);
    });
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      uiSetSelectedRoom(selectedRoom);
    }
  }, [selectedRoom]);

  return (
    <Fragment>
      {rooms.map(item => (
        <div
          key={item.id}
          onClick={() => {
            setSelectedRoom(item);
          }}>
          <RoomCard
            name={item.name}
            location={
              item.roomAddress.city +
              ',' +
              item.roomAddress.state +
              ',' +
              item.roomAddress.country
            }
            previewImage={'http://127.0.0.1:8080/ipfs/' + item.images.img1}
            price={'$' + item.price}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default LatestRooms;
