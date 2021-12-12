import {StyleSheet, css} from 'aphrodite';
import React, {useRef} from 'react';
import {getFileFromArcana, uploadToArcana} from '../api/api';
import {getUserInfo, loginWithGithub, loginWithGoogle} from '../api/arcanaAuth';
import LeftNav from '../components/LeftNav';
import {useStore} from '../store';

const MediaForArcana = () => {
  const mediaRef = useRef();
  const arcanaFiles = useStore(state => state.arcanaFiles);
  const setArcanaFiles = useStore(state => state.setArcanaFiles);

  const handleUpload = async () => {
    try {
      const files = mediaRef.current;
      const data = await uploadToArcana(files[0]);
      setArcanaFiles(data, arcanaFiles);
      console.log(data);
    } catch (e) {
      console.error('Account::error', e);
    }
  };

  const onFilesSelected = e => {
    mediaRef.current = e.target.files;
  };

  const handleFileDownload = async id => {
    await getFileFromArcana(id);
  };

  return (
    <div>
      <input type="file" multiple onChange={onFilesSelected} />

      <button className={css(styles.button)} onClick={handleUpload}>
        Upload
      </button>

      <div>
        {arcanaFiles.map(item => (
          <div key={item}>
            <p> {item} </p>
            <button
              onClick={() => {
                handleFileDownload(item);
              }}>
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Account = () => {
  const arcanauserinfo = useStore(state => state.arcanauserinfo);
  const setArcanaUserInfo = useStore(state => state.setarcanauserinfo);

  const handleGooglePress = async () => {
    // await loginWithGithub();
    await loginWithGoogle();
    const userInfo = await getUserInfo();
    setArcanaUserInfo(userInfo);
    console.log(userInfo);
  };

  const handleGithubPress = async () => {
    await loginWithGithub();
    const userInfo = await getUserInfo();
    setArcanaUserInfo(userInfo);
    console.log(userInfo);
  };

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <LeftNav />
        <div className={css(styles.rightC)}>
          <div className={css(styles.heading)}>
            Private encrypted media storage powered by Arcana
          </div>
          {arcanauserinfo ? (
            <MediaForArcana />
          ) : (
            <div className={css(styles.buttons)}>
              <button
                className={css(styles.button)}
                onClick={handleGooglePress}>
                Google signin
              </button>
              <button
                className={css(styles.button)}
                onClick={handleGooglePress}>
                Github signin
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 34,
    fontWeight: 600,
    marginTop: 120,
    marginBottom: 60,
    marginLeft: 36,
  },
  buttons: {
    marginLeft: 36,
    display: 'flex',
    columnGap: 20,
  },
  button: {
    width: 200,
    height: 60,
    background: '#0F8BC0',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 20,
    border: 'none',
  },
});

export default Account;
