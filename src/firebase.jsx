// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_b5fv4HjeK40DL_CJeMe9IYFou5naqno",
  authDomain: "vsg-agro-app.firebaseapp.com",
  projectId: "vsg-agro-app",
  storageBucket: "vsg-agro-app.firebasestorage.app",
  messagingSenderId: "165516343535",
  appId: "1:165516343535:web:208c2a178f7fced413831a",
  measurementId: "G-44QJX6LN4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);