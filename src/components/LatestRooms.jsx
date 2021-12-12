import React, {Fragment, useEffect, useState} from 'react';
import {getLatestRooms} from '../api/api';
import {useUiStore} from '../store';
import RoomCard from './RoomCard';

const LatestRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();
  const uiSetSelectedRoom = useUiStore(state => state.setSelectedRoom);
  const roomBooked = useUiStore(state => state.roomBooked);

  useEffect(() => {
    getLatestRooms().then(result => {
      setRooms(
        result.filter(item => {
          return !item.isBooked;
        }),
      );
    });
  }, [roomBooked]);

  useEffect(() => {
    if (selectedRoom) {
      uiSetSelectedRoom(selectedRoom);
    }
  }, [selectedRoom]);

  if (rooms.length == 0) {
    return (
      <div>
        <h3>No Rooms available [-_-]</h3>
      </div>
    );
  }

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
