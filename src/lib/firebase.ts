// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0GMprQo8MXlAGOBQ2y97x0skP7fEW1-4",
  authDomain: "aidroo.firebaseapp.com",
  projectId: "aidroo",
  storageBucket: "aidroo.appspot.com",
  messagingSenderId: "521322165901",
  appId: "1:521322165901:web:abffeca1d98c07f52754c4",
  measurementId: "G-KBQ2WVSV3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
