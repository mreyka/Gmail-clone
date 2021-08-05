import firebase from 'firebase';
import {FIREBASE_API_KEY} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "clone-ef36c.firebaseapp.com",
  projectId: "clone-ef36c",
  storageBucket: "clone-ef36c.appspot.com",
  messagingSenderId: "238223011945",
  appId: "1:238223011945:web:9fedcabb09e77744cc72f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};