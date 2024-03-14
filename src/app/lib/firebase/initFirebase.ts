// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cothing-clone.firebaseapp.com",
  projectId: "cothing-clone",
  storageBucket: "cothing-clone.appspot.com",
  messagingSenderId: "136444386299",
  appId: "1:136444386299:web:aec5102f731d9ba603095e",
  measurementId: "G-V7WD1X5KRH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



