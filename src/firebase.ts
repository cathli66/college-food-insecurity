import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

let config = {
  apiKey: "AIzaSyAqjO51mClXfXbu72STXh61he4DFIQ62hM",
  authDomain: "college-food-insecurity.firebaseapp.com",
  projectId: "college-food-insecurity",
  storageBucket: "college-food-insecurity.appspot.com",
  messagingSenderId: "4665121470",
  appId: "1:4665121470:web:4314793b41de87e8101cef",
  measurementId: "G-Z58FWB746P"
  // databaseURL: "https://bezkoder-firebase.firebaseio.com"
};

firebase.initializeApp(config);

export default firebase.firestore();
