// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJY-N4oX9KWPyYDvw_cNuirnA8hdXvAjo",
  authDomain: "react-course-69a26.firebaseapp.com",
  projectId: "react-course-69a26",
  storageBucket: "react-course-69a26.appspot.com",
  messagingSenderId: "673062989447",
  appId: "1:673062989447:web:9067ff6906449081605222",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
