// All future JS code should at least start here. 

//console.log('DEBUG: WEBPACK CONNECTION TEST')

import { initializeApp } from 'firebase/app'
import {
  getFirestore
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjlNLFFZeePmzCjFtr1RKArnux0yu5FP8",
    authDomain: "su-capstone-24.firebaseapp.com",
    projectId: "su-capstone-24",
    storageBucket: "su-capstone-24.appspot.com",
    messagingSenderId: "389375351578",
    appId: "1:389375351578:web:61cd12a8b511fd048eeaa3",
    measurementId: "G-7W95J7T3NX"
  };

  // Intialized Firebase App.
  initializeApp(firebaseConfig)

  // Initalized Services.
  const db = getFirestore()
  // Collection Ref.

  // Get Collection Data.