// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYwSoYtyHFbFbCDh4JGtZBqRffSpa_YQ0",
  authDomain: "coderspoint-nextjs-blog.firebaseapp.com",
  projectId: "coderspoint-nextjs-blog",
  storageBucket: "coderspoint-nextjs-blog.appspot.com",
  messagingSenderId: "717960399646",
  appId: "1:717960399646:web:32ff77ff5838b973d5d70f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
