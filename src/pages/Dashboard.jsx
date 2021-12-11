import React from 'react';
import LatestRooms from '../components/LatestRooms';
import {StyleSheet, css} from 'aphrodite';
import homeIcn from '../media/icons/homeIcn.png';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../Routes';

const Dashboard = () => {
  const history = useHistory();

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.leftNav)}>
          <div className={css(styles.logo)}>Decbo</div>

          <div className={css(styles.links)}>
            <div className={css(styles.link)}>
              <img src={homeIcn} alt="dada" />
              <div className={css(styles.text)}> Home </div>
            </div>
            <div className={css(styles.link)}>
              <img src={homeIcn} alt="dada" />
              <div className={css(styles.text)}> My Bookings </div>
            </div>
            <div
              className={css(styles.link)}
              onClick={() => {
                history.push(ROUTES.addRoom.path);
              }}>
              <img src={homeIcn} alt="dada" />
              <div className={css(styles.text)}> Seller </div>
            </div>
          </div>
        </div>
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
  leftNav: {
    width: 374,
    height: '100vh',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  logo: {
    fontSize: 45,
    fontWeight: 600,
    marginTop: 36,
    marginLeft: 75,
  },
  links: {
    marginTop: 160,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 33,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 39,
    fontSize: 34,
    fontWeight: 500,
    columnGap: 13,
    color: '#0F8BC0',
    cursor: 'pointer',
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
