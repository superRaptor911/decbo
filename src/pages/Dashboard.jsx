import React from 'react';
import LatestRooms from '../components/LatestRooms';
import {StyleSheet, css} from 'aphrodite';
import {useHistory} from 'react-router-dom';
import LeftNav from '../components/LeftNav';
import BookRoom from '../components/BookRoom';
import {useUiStore} from '../store';

const Dashboard = () => {
  const history = useHistory();
  const selectedRoom = useUiStore(state => state.selectedRoom);

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <LeftNav />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <div className={css(styles.right)}>
            <div className={css(styles.loading)}>Rooms</div>
            <div className={css(styles.rcards)}>
              <LatestRooms />
            </div>
          </div>
          {selectedRoom && <BookRoom room={selectedRoom} />}
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
    fontSize: 40,
    marginBottom: 15,
    textDecoration: 'underline',
  },
  rcards: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 19,
  },
});

export default Dashboard;
