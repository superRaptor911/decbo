/* eslint-disable react/prop-types */
import {StyleSheet, css} from 'aphrodite';
import React from 'react';

const BookRoom = ({room}) => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.heading)}>Shikara Hotel</div>
      <div className={css(styles.divider)}></div>
      <div className={css(styles.images)}>
        <img
          src={'http://127.0.0.1:8080/ipfs/' + room.images?.img1}
          alt="room"
          className={css(styles.image)}
        />
      </div>
      <div className={css(styles.dHeading)}>Overview</div>
      <div className={css(styles.desc)}>{room.description}</div>
      <div className={css(styles.location)}>
        {room.roomAddress.city +
          ',' +
          room.roomAddress.state +
          ',' +
          room.roomAddress.country}
      </div>
      <button className={css(styles.button)}>BOOK NOW</button>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
    width: 493,
    background: '#FFFFFF',
    padding: 18,
  },
  heading: {
    fontWeight: 600,
    fontSize: 34,
    marginTop: 90,
  },
  divider: {
    marginTop: 40,
    marginBottom: 40,
    width: 440,
    height: 1,
    background: 'rgba(0, 0, 0, 0.35)',
  },
  image: {
    width: 440,
    height: 250,
    marginBottom: 50,
    borderRadius: 20,
  },
  dHeading: {
    fontSize: 20,
    fontWeight: 600,
  },
  desc: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.56)',
    marginBottom: 18,
  },
  location: {
    fontSize: 23,
    fontWeight: 600,
    marginBottom: 35,
  },
  button: {
    width: 429,
    height: 100,
    background: '#0F8BC0',
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 600,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 20,
    border: 'none',
  },
});

export default BookRoom;
