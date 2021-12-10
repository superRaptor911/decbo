import React, {useRef, useState} from 'react';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link, useHistory} from 'react-router-dom';
import {ROUTES} from '../Routes';
import Alert from '@mui/material/Alert';
import {addRoom} from '../api/api';

const AddRoom = () => {
  const [error, setError] = useState('');
  const nameRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const descriptionRef = useRef();
  const roomCapacityRef = useRef();
  const mediaRef = useRef();

  const onFilesSelected = e => {
    mediaRef.current = e.target.files;
    console.log(e.target.files);
  };

  const handleSubmit = async () => {
    const name = nameRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const country = countryRef.current.value;
    const description = descriptionRef.current.value;
    const roomCapacity = roomCapacityRef.current.value;
    const files = mediaRef.current;
    console.log(files[0]);

    try {
      // const result = await addRoom(
      //   name,
      //   city,
      //   state,
      //   country,
      //   description,
      //   roomCapacity,
      // );
    } catch (e) {
      console.error('AddRoom::Error', e);
    }
  };

  return (
    <div>
      <h2 style={{textAlign: 'center', marginTop: 100}}>Add Room</h2>
      <Paper
        style={{
          maxWidth: 500,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          marginTop: 100,
        }}>
        <Input placeholder="Name" inputRef={nameRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="City" inputRef={cityRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="State" inputRef={stateRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="Country" inputRef={countryRef} />
        <div style={{marginTop: 40}} />
        <Input placeholder="Description" inputRef={descriptionRef} />
        <div style={{marginTop: 40}} />
        <Input
          placeholder="Room Capacity"
          type="number"
          inputRef={roomCapacityRef}
        />
        <div style={{marginTop: 40}} />

        <input
          type="file"
          id="myFile"
          name="filename"
          multiple
          accept="image/*"
          onChange={onFilesSelected}
        />

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

export default AddRoom;
