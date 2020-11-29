import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1UrPWCTHO0AHR53YPQ5k87wY58V2BJCM",
  authDomain: "jambeasyad.firebaseapp.com",
  databaseURL: "https://jambeasyad.firebaseio.com",
  projectId: "jambeasyad",
  storageBucket: "jambeasyad.appspot.com",
  messagingSenderId: "168666663074",
  appId: "1:168666663074:web:1b113c782de0c91e08effb",
  measurementId: "G-88L8GS1915",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
