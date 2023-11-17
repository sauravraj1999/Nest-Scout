// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-project.firebaseapp.com",
  projectId: "estate-mern-project",
  storageBucket: "estate-mern-project.appspot.com",
  messagingSenderId: "894694015988",
  appId: "1:894694015988:web:fdf34809b619afeff7afa1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

