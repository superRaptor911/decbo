import React, {useRef, useState} from 'react';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link, useHistory} from 'react-router-dom';
import {ROUTES} from '../Routes';
import Alert from '@mui/material/Alert';
import {registerUser} from '../api/api';

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
    <div>
      <h2 style={{textAlign: 'center', marginTop: 100}}>Create Account</h2>
      <Paper
        style={{
          maxWidth: 500,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          marginTop: 100,
        }}>
        <Input placeholder="Username" inputRef={nameRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="Email" inputRef={emailRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="Phone no" inputRef={phoneRef} />
        <div style={{marginTop: 40}} />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        {error && (
          <Alert severity="error" sx={{marginTop: 2}}>
            {error}
          </Alert>
        )}

        <Link to={ROUTES.home.path} style={{textAlign: 'right', marginTop: 15}}>
          Home
        </Link>
      </Paper>
    </div>
  );
};

export default Register;
