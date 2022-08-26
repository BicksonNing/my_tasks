// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHUWEmIRfDVQenVkFQ0_3qd8C_ZeE3nk0",
  authDomain: "my-tasks-a819b.firebaseapp.com",
  projectId: "my-tasks-a819b",
  storageBucket: "my-tasks-a819b.appspot.com",
  messagingSenderId: "938133257141",
  appId: "1:938133257141:web:c22dc6f47b6d93981277fc",
  measurementId: "G-JE63TV6YK1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
export { app, db };
