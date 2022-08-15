// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Dmr-9pWVUytTcglDKDpay95uANqerg4",
  authDomain: "reels-next-30f10.firebaseapp.com",
  projectId: "reels-next-30f10",
  storageBucket: "reels-next-30f10.appspot.com",
  messagingSenderId: "377156069755",
  appId: "1:377156069755:web:6f87aa6295ad20beff35de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { auth, storage, db }
export default app;