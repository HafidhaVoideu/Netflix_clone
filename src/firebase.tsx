// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQYHzuZEb2lYpjFJNXRBE0LgEEaw56Ygo",
  authDomain: "netflix-clone-36ce0.firebaseapp.com",
  databaseURL: "https://netflix-clone-36ce0-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-36ce0",
  storageBucket: "netflix-clone-36ce0.appspot.com",
  messagingSenderId: "101252439927",
  appId: "1:101252439927:web:ac22b13364f141798dcb72",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth}

export default db;