import React, {useEffect} from 'react';
import {getFileFromArcana} from '../api/api';
import {getUserInfo, loginWithGithub, loginWithGoogle} from '../api/arcanaAuth';
import {useStore} from '../store';

const GithApp = () => {
  const arcanaUserInfo = useStore(state => state.arcanaUserInfo);
  const setArcanaUserInfo = useStore(state => state.setArcanaUserInfo);

  getFileFromArcana(
    '0x64854ae9c5fd3fbb31a3ba4fa84c6094840942db1db249f4a18a07b238d8c8db',
  );

  console.log('arcanaUserInfo ', arcanaUserInfo);
  const handlePress = async () => {
    // await loginWithGithub();
    await loginWithGoogle();
    const userInfo = await getUserInfo();
    setArcanaUserInfo(userInfo);
    console.log(userInfo);
  };

  return (
    <div>
      <h3>Github Login Test</h3>
      <button onClick={handlePress}>Login</button>
    </div>
  );
};

export default GithApp;
