import {Button, Typography} from '@mui/material';
import React from 'react';
import {useHistory} from 'react-router';
import {ROUTES} from '../Routes';
import {getWeb3, initContract} from '../webInit';
import UserContract from '../contracts/UserContact.json';
import HomeImg from '../media/images/Home.png';
import {StyleSheet, css} from 'aphrodite';

const Home = () => {
  const history = useHistory();

  const handleGetStared = async () => {
    try {
      const web3 = await getWeb3();
      const contract = await initContract(UserContract, web3);
      const addresses = await web3.eth.getAccounts();
      try {
        const result = await contract.methods.getUser(addresses[0]).call();
        history.push(ROUTES.dashboard.path);
      } catch (e) {
        console.error('Home::', e);
        history.push(ROUTES.register.path);
      }
    } catch (e) {
      console.error('Home::Error', e);
    }
  };

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.lContent)}>
          <div className={css(styles.contents)}>
            <div className={css(styles.heading)}>Welcome to Decbo</div>
            <div className={css(styles.content)}>Ready to Explore........</div>
            <button className={css(styles.button)} onClick={handleGetStared}>
              Get Started
            </button>
          </div>
        </div>
        <div className={css(styles.rContent)}>
          <img
            src={HomeImg}
            alt="homeImg"
            style={{height: '100vh', width: '50vw'}}
          />
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    background: '#FAFAFA',
    height: '100vh',
    overflowY: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  lContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 45,
    fontWeight: 600,
    marginBottom: 39,
  },
  content: {
    fontSize: 30,
  },
  button: {
    width: 444,
    height: 62,
    background: '#0F8BC0',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    borderRadius: 20,
    border: 'none',
    marginTop: 57,
    cursor: 'pointer',
  },
});

export default Home;
