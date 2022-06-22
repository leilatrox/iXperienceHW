// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrkovVyhTQXguKQJDacAGuwc1RagoGxp0",
  authDomain: "images-79028.firebaseapp.com",
  projectId: "images-79028",
  storageBucket: "images-79028.appspot.com",
  messagingSenderId: "269295535295",
  appId: "1:269295535295:web:2c959dca07c36d2ec5b20a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
