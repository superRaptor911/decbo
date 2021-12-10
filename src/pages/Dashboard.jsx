import React from 'react';
import LatestRooms from '../components/LatestRooms';
import { StyleSheet, css } from 'aphrodite';
import RoomCard from '../components/RoomCard';

const Dashboard = () => {
  return (
    <div className={css(styles.root)}>
      <RoomCard/>

      <LatestRooms />
    </div>
  );
};

const styles = StyleSheet.create({

})

export default Dashboard;
