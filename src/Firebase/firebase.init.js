// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YK9VSKGVvgRZoNOk0B5gIBEtiLPaS6k",
  authDomain: "utility-mangement-react.firebaseapp.com",
  projectId: "utility-mangement-react",
  storageBucket: "utility-mangement-react.firebasestorage.app",
  messagingSenderId: "971344021721",
  appId: "1:971344021721:web:0ecb10e5a1adefd90256c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app