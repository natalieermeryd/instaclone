/** 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHpeXpoHUzqVaitG4V8VMQA69ySGVsH2k",
  authDomain: "natta-instaclone.firebaseapp.com",
  databaseURL: "https://natta-instaclone-default-rtdb.firebaseio.com",
  projectId: "natta-instaclone",
  storageBucket: "natta-instaclone.appspot.com",
  messagingSenderId: "357417956518",
  appId: "1:357417956518:web:f6ed4b642d819cc0f03067",
  measurementId: "G-4N6GZFKF25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/

import firebase from "firebase";

const firebaseApp = firebase.initalizeApp({
  apiKey: "AIzaSyBHpeXpoHUzqVaitG4V8VMQA69ySGVsH2k",
  authDomain: "natta-instaclone.firebaseapp.com",
  databaseURL: "https://natta-instaclone-default-rtdb.firebaseio.com",
  projectId: "natta-instaclone",
  storageBucket: "natta-instaclone.appspot.com",
  messagingSenderId: "357417956518",
  appId: "1:357417956518:web:f6ed4b642d819cc0f03067",
  measurementId: "G-4N6GZFKF25",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db;
