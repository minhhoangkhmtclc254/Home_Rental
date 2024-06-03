// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-mern.firebaseapp.com",
  projectId: "home-mern",
  storageBucket: "home-mern.appspot.com",
  messagingSenderId: "467934822606",
  appId: "1:467934822606:web:e4003970640424ddd8109f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
