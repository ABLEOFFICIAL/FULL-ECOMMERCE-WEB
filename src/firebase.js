// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxU42L2m6dcZFP--TYWEfSz0xToyH46yo",
  authDomain: "full-ecomerce-web.firebaseapp.com",
  projectId: "full-ecomerce-web",
  storageBucket: "full-ecomerce-web.firebasestorage.app",
  messagingSenderId: "414749140324",
  appId: "1:414749140324:web:6a130a02420fe4954c0671",
  measurementId: "G-78TKLSHJLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
