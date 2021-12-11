import {AuthProvider} from '@arcana/auth';
import {Arcana as StorageProvider} from '@arcana/storage/dist/standalone/storage.umd';
import {useStore} from '../store';

const authInstance = new AuthProvider({
  appID: '226',
  network: 'testnet',
  oauthCreds: [
    {
      type: 'google',
      clientId:
        '865417074548-kb40i60nbkfoq4l2vlmtk6j9al8024gc.apps.googleusercontent.com',
    },
    {
      type: 'github',
      clientId: '341713a5ac19fd7778f0',
    },
  ],
  redirectUri: 'http://localhost:3000/arcanaredirect',
});

export async function loginWithGoogle() {
  const loggedIn = authInstance.isLoggedIn();
  if (!loggedIn) {
    await authInstance.loginWithSocial('google');
  }
}

export async function loginWithGithub() {
  const loggedIn = authInstance.isLoggedIn();
  if (!loggedIn) {
    await authInstance.loginWithSocial('github');
  }
}

export async function getUserInfo() {
  return await authInstance.getUserInfo();
}

export async function handleRedirect() {
  AuthProvider.handleRedirectPage(window.location);
  const userInfo = authInstance.getUserInfo();
  return userInfo;
}

export function getArcanaStorage() {
  const userInfo = useStore.getState().arcanaUserInfo;
  const storeInstance = new StorageProvider({
    appId: '226',
    privateKey: userInfo.privateKey,
    email: userInfo.email,
  });
  return storeInstance;
}
