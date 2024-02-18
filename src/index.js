// All future JS code should at least start here. 

//console.log('DEBUG: WEBPACK CONNECTION TEST')

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc,
  deleteDoc,
  doc
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

// Intialized Firebase App.https://i.pinimg.com/736x/02/ae/9b/02ae9b610cb81b4abf32d10fb314358e.jpg
initializeApp(firebaseConfig)

// Initalized Services.
const db = getFirestore()

// Collection Ref.
const collectionRef = collection(db, 'test')

// Get Collection Data.
getDocs(collectionRef)
  .then((snapshot) => {
    let test = []
    snapshot.docs.forEach((doc) => {
      test.push({ ...doc.data(), id: doc.id})
    })
    console.log(test)
  })
  .catch(err => {
    console.log(err.message)
})

// Adding Documents.
const addTestForm = document.querySelector('.add')
addTestForm?.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(collectionRef, {
    name: addTestForm.name.value,
    age: addTestForm.age.value,
    membership: addTestForm.membership.value
  })
  .then(() => {
    addTestForm.reset()
  })
})

// Deleting Documents.
const deleteTestForm = document.querySelector('.delete')
deleteTestForm?.addEventListener('submit', (e) => {
  e.preventDefault()

const documentRef = doc(db, 'test', deleteTestForm.id.value)

deleteDoc(documentRef)
  .then(() => {
    deleteTestForm.reset()
  })

})