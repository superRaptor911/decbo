import {Button, Typography} from '@mui/material';
import React from 'react';
import {useHistory} from 'react-router';
import mainImg from '../media/images/piggyWithSheet.png';
import {ROUTES} from '../Routes';
import {getWeb3, initContract} from '../webInit';
import UserContract from '../contracts/UserContact.json';

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
    <div>
      <div style={{width: 'max-content', margin: 'auto', marginTop: 30}}>
        <img src={mainImg} alt="gg" />
      </div>
      <Typography textAlign="center">
        Save money by tracking your spending! Use ExpenseMeter to track your
        spending
      </Typography>

      <div style={{width: 'max-content', margin: 'auto', marginTop: 30}}>
        <Button variant="contained" onClick={handleGetStared}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
