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
          location={item.city + ',' + item.state + ',' + item.country}
          previewImage={'http://127.0.0.1:8080/ipfs/' + item.previewImage1.path}
          key={item.id}
          price={'$100'}
        />
      ))}
    </Fragment>
  );
};

export default LatestRooms;
