// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdPS4DQPLpnfMfbEjTT5UWcEcvQgqImmg",
  authDomain: "react-basic-9a211.firebaseapp.com",
  projectId: "react-basic-9a211",
  storageBucket: "react-basic-9a211.appspot.com",
  messagingSenderId: "414648965875",
  appId: "1:414648965875:web:d4441b9fc38e3caba9b586",
  measurementId: "G-Y6RRT8YRPF"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export {db}
  

