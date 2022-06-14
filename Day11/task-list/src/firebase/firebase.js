// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATsPzyVvBfhXzRinO-kO0p44OPlMVZg90",
  authDomain: "tasklist-ef319.firebaseapp.com",
  projectId: "tasklist-ef319",
  storageBucket: "tasklist-ef319.appspot.com",
  messagingSenderId: "668683823958",
  appId: "1:668683823958:web:9093adb54fa09de6eec4f7",
  measurementId: "G-6QFK6X71V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}