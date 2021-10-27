// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.React_App_FIREBASE_API_KEY,
  authDomain: process.env.React_App_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.React_App_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_App_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_App_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.React_App_FIREBASE_APP_ID,
  measurementId: process.env.React_App_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
