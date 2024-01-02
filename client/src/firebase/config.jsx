// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGULsHh30swNQlVzk76-NdDDyc_KxEvSs",
  authDomain: "note-app-8dd59.firebaseapp.com",
  projectId: "note-app-8dd59",
  storageBucket: "note-app-8dd59.appspot.com",
  messagingSenderId: "973973184459",
  appId: "1:973973184459:web:43983b128be3fe14dfe04e",
  measurementId: "G-RBDTEXTJGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);