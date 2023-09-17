// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0kdLRlpRUoMrZK8jNizTrqG37cZ6C9I",
  authDomain: "mug-mart.firebaseapp.com",
  projectId: "mug-mart",
  storageBucket: "mug-mart.appspot.com",
  messagingSenderId: "534471827821",
  appId: "1:534471827821:web:0086dd9b8ac1130cf53a64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
