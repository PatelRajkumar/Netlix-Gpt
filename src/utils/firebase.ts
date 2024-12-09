// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSbgvBSydqiVUy-Zr4SWaY93QdPq_VqHg",
  authDomain: "netflixgpt-2c8a8.firebaseapp.com",
  projectId: "netflixgpt-2c8a8",
  storageBucket: "netflixgpt-2c8a8.firebasestorage.app",
  messagingSenderId: "192511584732",
  appId: "1:192511584732:web:81cb316193795d56cac719",
  measurementId: "G-KFV0VN6E6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)