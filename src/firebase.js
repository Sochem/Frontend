// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database";
import {getFireStore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2WAcrxccI802W7iPrtbxPGNh-LCrxewc",
  authDomain: "sochem-website-166c5.firebaseapp.com",
  projectId: "sochem-website-166c5",
  storageBucket: "sochem-website-166c5.appspot.com",
  messagingSenderId: "1017990669957",
  appId: "1:1017990669957:web:eab2236d9ba88b7b906bec",
  measurementId: "G-LCEFC7T4GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
// Get a reference to the database service
export const firebaseDB = getDatabase(app);
export { firestore };
