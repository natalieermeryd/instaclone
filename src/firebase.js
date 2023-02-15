import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHpeXpoHUzqVaitG4V8VMQA69ySGVsH2k",
  authDomain: "natta-instaclone.firebaseapp.com",
  databaseURL: "https://natta-instaclone-default-rtdb.firebaseio.com",
  projectId: "natta-instaclone",
  storageBucket: "natta-instaclone.appspot.com",
  messagingSenderId: "357417956518",
  appId: "1:357417956518:web:f6ed4b642d819cc0f03067",
  measurementId: "G-4N6GZFKF25",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
