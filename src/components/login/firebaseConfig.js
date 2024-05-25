// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVb4DQej-3QukZ_Kbp6aYLUqLlqVLHsgw",
    authDomain: "deeptruth-1c34f.firebaseapp.com",
    projectId: "deeptruth-1c34f",
    storageBucket: "deeptruth-1c34f.appspot.com",
    messagingSenderId: "1042631066986",
    appId: "1:1042631066986:web:f2d7655cb00da9b4ee9113",
    measurementId: "G-XFJ1LFRZNG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle };
