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

	
export const createUserProfileDocument = async(userAuth, additionalData) => {
	if(!userAuth)return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})

		} catch(error) {
			console.log('error from creating an user', error.message);
		}
	}
	return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;