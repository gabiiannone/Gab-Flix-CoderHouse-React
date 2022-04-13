// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcuOCwPYJWsjyzfomRX4LD0cwRh_1s5uA",
  authDomain: "gab-flix-proyecto-coderhouse.firebaseapp.com",
  projectId: "gab-flix-proyecto-coderhouse",
  storageBucket: "gab-flix-proyecto-coderhouse.appspot.com",
  messagingSenderId: "627091538483",
  appId: "1:627091538483:web:78aba171ea01cce9bf5946",
  measurementId: "G-BH0ZF5L6LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db