import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBul8yi05t9x8n7vF8TFhJ_iAMe2L_42Z8",
  authDomain: "projects-for-interview.firebaseapp.com",
  projectId: "projects-for-interview",
  storageBucket: "projects-for-interview.firebasestorage.app",
  messagingSenderId: "151103074867",
  appId: "1:151103074867:web:49ba4377c758409cfb2946",
  measurementId: "G-7WLF7REW8H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

