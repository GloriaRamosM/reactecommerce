import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSCGcWL5706NUWZQYEpjT0VfP4YxjYKFc",
  authDomain: "react-comision47195.firebaseapp.com",
  projectId: "react-comision47195",
  storageBucket: "react-comision47195.appspot.com",
  messagingSenderId: "303602477131",
  appId: "1:303602477131:web:e2ff8730bcdf63f70e85ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
