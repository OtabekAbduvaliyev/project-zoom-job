// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMaFWRwDjxrT214Bor5pvZa6q2GRakKt8",
  authDomain: "olx-clone-a372e.firebaseapp.com",
  projectId: "olx-clone-a372e",
  storageBucket: "olx-clone-a372e.appspot.com",
  messagingSenderId: "664457268200",
  appId: "1:664457268200:web:0b8a9fe526d5af06feb25d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app);