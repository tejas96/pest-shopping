// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8wB7yFjSESkigEhdHifZdh72uCxObKDU',
  authDomain: 'shopping-cart-dca48.firebaseapp.com',
  projectId: 'shopping-cart-dca48',
  storageBucket: 'shopping-cart-dca48.appspot.com',
  messagingSenderId: '554184154965',
  appId: '1:554184154965:web:e5c1dc8a5a19bf17c419dc',
  measurementId: 'G-4FSC6VLS4V'
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
// export default firebase;
// const analytics = getAnalytics(app);
