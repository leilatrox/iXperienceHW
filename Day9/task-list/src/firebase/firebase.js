// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8VkxCcbV6752IhCpXWyXZBGpPIPUNqpc",
  authDomain: "task-list-933ef.firebaseapp.com",
  projectId: "task-list-933ef",
  storageBucket: "task-list-933ef.appspot.com",
  messagingSenderId: "984657084962",
  appId: "1:984657084962:web:68edb665b44ced592a007b",
  measurementId: "G-S85SCXM7YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);

export {
  firestore
}