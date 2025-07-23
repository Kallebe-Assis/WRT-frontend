// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "demo-key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "wrtmind.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "wrtmind",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "wrtmind.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "86110752542",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:86110752542:web:6ee0a36d3e6f32da40c30f",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-9X9077B6WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (opcional)
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.log('Analytics não disponível:', error.message);
}

export { app, db, analytics }; 