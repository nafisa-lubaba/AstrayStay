// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcojEgwTi7hB8aiVeBK4sfmQXdbiIdX18",
  authDomain: "astrastay-5fa84.firebaseapp.com",
  projectId: "astrastay-5fa84",
  storageBucket: "astrastay-5fa84.firebasestorage.app",
  messagingSenderId: "796368750713",
  appId: "1:796368750713:web:9bd45cee8db7ebc95d6ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
