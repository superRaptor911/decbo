import React, {useEffect, useState} from 'react';
import {getLatestRooms} from '../api/api';

const LatestRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getLatestRooms().then(result => {
      setRooms(result);
    });
  }, []);

  return (
    <div>
      <h2>Latest Rooms</h2>
      {rooms.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.city}</p>
          <img
            src={'http://127.0.0.1:8080/ipfs/' + item.previewImage1.path}
            alt="gg"
            style={{width: 200, height: 'auto'}}
          />
        </div>
      ))}
    </div>
  );
};

export default LatestRooms;
