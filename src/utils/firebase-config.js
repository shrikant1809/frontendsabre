import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDih9sOAhm26-hJVIWErwtsyntphJO9gVM",
  authDomain: "react-sabreflix.firebaseapp.com",
  projectId: "react-sabreflix",
  storageBucket: "react-sabreflix.appspot.com",
  messagingSenderId: "92139672951",
  appId: "1:92139672951:web:c7060215632b5c83df7d72",
  measurementId: "G-7286J4MJL1"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);