import {StyleSheet, css} from 'aphrodite';
import React, {useEffect, useState} from 'react';
import {getBookedRooms, getRoomWithId} from '../api/api';
import Img from '../media/images/lodge.png';

async function getRooms() {
  const rooms = [];
  const books = await getBookedRooms();
  for (const item of books) {
    const room = await getRoomWithId(item.roomId);
    rooms.push(room);
  }

  return rooms;
}

const Booked = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  useEffect(() => {
    getRooms().then(rooms => setBookedRooms(rooms));
  }, []);

  console.log(bookedRooms);
  return (
    <div>
      {bookedRooms &&
        bookedRooms.map(room => (
          <div className={css(styles.root)} key={room.id}>
            <img
              src={'http://127.0.0.1:8080/ipfs/' + room.images.img1}
              alt=""
              className={css(styles.img)}
            />
            <div className={css(styles.name)}>{room.name}</div>
            <div className={css(styles.price)}>{room.price}</div>
          </div>
        ))}
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 50,
    marginLeft: 50,
    height: 137,
    width: 500,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  img: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 28,
    fontWeight: 500,
  },
  price: {
    fontSize: 22,
    fontWeight: 600,
  },
});

export default Booked;
