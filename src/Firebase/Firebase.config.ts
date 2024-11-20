// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCpbJVyBvmVWh9g3PxDTIQ0hJmdocKgLQ",
  authDomain: "job-portal-c39ed.firebaseapp.com",
  projectId: "job-portal-c39ed",
  storageBucket: "job-portal-c39ed.firebasestorage.app",
  messagingSenderId: "582890975833",
  appId: "1:582890975833:web:fc32ea5312df82af797748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;