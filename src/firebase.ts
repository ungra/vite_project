// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL-IYWOgqWE5s8_R0gV9ZlTBj9dWxNR2w",
  authDomain: "vite-project-bbb8f.firebaseapp.com",
  projectId: "vite-project-bbb8f",
  storageBucket: "vite-project-bbb8f.firebasestorage.app",
  messagingSenderId: "1006282441939",
  appId: "1:1006282441939:web:4ae80530f085f9e4040026",
  measurementId: "G-FVG9D1WBJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
