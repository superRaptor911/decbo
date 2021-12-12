import React, {Fragment, useEffect, useState} from 'react';
import {getLatestRooms} from '../api/api';
import RoomCard from './RoomCard';

const LatestRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getLatestRooms().then(result => {
      setRooms(result);
    });
  }, []);

  return (
    <Fragment>
      {rooms.map(item => (
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
          key={item.id}
          price={'$' + item.price}
        />
      ))}
    </Fragment>
  );
};

export default LatestRooms;
