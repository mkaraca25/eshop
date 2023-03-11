// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC7IzwV52KgaXwFib3qJMpbtm7yPSaCJWk",
  authDomain: "eshop-57527.firebaseapp.com",
  projectId: "eshop-57527",
  storageBucket: "eshop-57527.appspot.com",
  messagingSenderId: "1096186731547",
  appId: "1:1096186731547:web:ca8e535e299d93e255ecbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;