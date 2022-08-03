// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6uX3WSkfFteKtKQ-7ShPC9TmJUgHJ0vA",
  authDomain: "zoom-5a1d9.firebaseapp.com",
  projectId: "zoom-5a1d9",
  storageBucket: "zoom-5a1d9.appspot.com",
  messagingSenderId: "631634934987",
  appId: "1:631634934987:web:3cc67ff4b6b6026f662f4e",
  measurementId: "G-HYFLJ1BW04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
