import React from 'react';
import LatestRooms from '../components/LatestRooms';
import {StyleSheet, css} from 'aphrodite';
import {useHistory} from 'react-router-dom';
import LeftNav from '../components/LeftNav';
import BookRoom from '../components/BookRoom';

const Dashboard = () => {
  const history = useHistory();

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <LeftNav />
        <div className={css(styles.right)}>
          <div className={css(styles.loading)}>Lodging Available</div>
          <div className={css(styles.rcards)}>
            <LatestRooms />
          </div>

          {/* <PopularCards/> */}
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    display: 'flex',
  },
  
  right: {
    paddingLeft: 112,
    paddingTop: 100,
  },
  loading: {
    fontWeight: 600,
    fontSize: 25,
    marginBottom: 15,
  },
  rcards: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 19,
  },
});

export default Dashboard;
