import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAyDX-AG8R4ASdSh6kfnblqe6U7pygieFg",
    authDomain: "crwn-db-9dbc8.firebaseapp.com",
    databaseURL: "https://crwn-db-9dbc8.firebaseio.com",
    projectId: "crwn-db-9dbc8",
    storageBucket: "crwn-db-9dbc8.appspot.com",
    messagingSenderId: "663928103345",
    appId: "1:663928103345:web:a3bd3c5d0a67f022d79d90",
    measurementId: "G-4P2SP3TJ59"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;