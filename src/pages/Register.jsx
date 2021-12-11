import React, {useRef, useState} from 'react';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link, useHistory} from 'react-router-dom';
import {ROUTES} from '../Routes';
import Registerimg from "../media/images/register.png"
import Alert from '@mui/material/Alert';
import {registerUser} from '../api/api';
import { StyleSheet, css } from 'aphrodite';
import { border, maxWidth } from '@mui/system';

const Register = () => {
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const username = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    if (username.length < 3) {
      setError('Username too short! min 3 chars');
      return;
    }
    try {
      await registerUser(username, email, phone);
      history.push(ROUTES.dashboard.path);
    } catch (e) {
      console.error('Register::Error failed to register', e);
    }
  };

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
          <div className={css(styles.lContent)}>
              <div className={css(styles.heading)}>Welcome to Decbo</div>
              <div className={css(styles.inpContents)}>
              <input type="text" placeholder="Enter your full name" className={css(styles.inputs)} ref={{nameRef}} />
              <input type="email" placeholder="Email address" className={css(styles.inputs)}  ref = {emailRef} />
              <input type="text" placeholder="Mobile number" className={css(styles.inputs)} ref = {phoneRef} />
              <button className={css(styles.button)} onClick={handleSubmit}> Sign up </button>
              </div>
              
          </div>
          <div className={css(styles.rContent)}>
            <img src={Registerimg} alt="homeImg" />
          </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root:{
    background: "#FAFAFA",
  },
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lContent:{
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  inpContents:{
    display: "inline-flex",
    flexDirection: "column",
    rowGap: 32
  },
heading:{
  fontSize: 45,
  fontWeight: 600,
  marginBottom: 39
},
inputs:{
  width: 420,
  height: 62,
  border: "1px solid #9D9D9D",
  borderRadius: 20,
  fontSize: 18,
  paddingLeft: 24,
  "::placeholder":{
    fontSize: 18,
    color: "#706464",
  }
},
button:{
  width: 444,
  height: 62,
  background: "#0F8BC0",
  color: "#FFFFFF",
  textAlign: "center",
  fontSize: 24,
  fontWeight: 600,
  borderRadius: 20,
  border:"none",
  cursor: "pointer"
}

});

export default Register;
