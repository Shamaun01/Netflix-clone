// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZENNTW1oohftVBRiyTktXOhyqzhDnMHI",
  authDomain: "netflix-project-90b40.firebaseapp.com",
  projectId: "netflix-project-90b40",
  storageBucket: "netflix-project-90b40.appspot.com",
  messagingSenderId: "438716448631",
  appId: "1:438716448631:web:1e14dee1f0bf4632552b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export {auth};