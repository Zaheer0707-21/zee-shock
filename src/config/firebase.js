// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBjuFLRsH8QdeYyCOJ4KOohWivCO3A2vjk",
  authDomain: "blog-app-zaheer.firebaseapp.com",
  projectId: "blog-app-zaheer",
  storageBucket: "blog-app-zaheer.firebasestorage.app",
  messagingSenderId: "928984631967",
  appId: "1:928984631967:web:4560d6341504bbec47b0aa",
  measurementId: "G-DMB37P043K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth