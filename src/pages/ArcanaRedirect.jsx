import React, {useEffect} from 'react';
import {handleRedirect} from '../api/arcanaAuth';
import {useStore} from '../store';

const ArcanaRedirect = () => {
  // const setArcanaUserInfo = useStore(state => state.setArcanaUserInfo);

  useEffect(() => {
    handleRedirect().then(result => {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <h3>Arcana Redirect</h3>
    </div>
  );
};

export default ArcanaRedirect;
