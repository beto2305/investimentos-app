import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUIg1cpc8dvDpBqhDr60pWxk-ZQ4vw7lU",
  authDomain: "investimentos-app.firebaseapp.com",
  projectId: "investimentos-app",
  storageBucket: "investimentos-app.appspot.com",
  messagingSenderId: "823954601949",
  appId: "1:823954601949:web:0a40491adbf08d2ed42834",
  measurementId: "G-PXXSMHRZCW",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default Firebase;
