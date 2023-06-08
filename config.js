//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyCg8IcVk3aECHMYQPLOQDHOOrDJc7A68ow",
  authDomain: "loginscreen-b5b95.firebaseapp.com",
  projectId: "loginscreen-b5b95",
  storageBucket: "loginscreen-b5b95.appspot.com",
  messagingSenderId: "940656801590",
  appId: "1:940656801590:web:fbc42e2db96e991bf3e597",
  measurementId: "G-JR7SQ1TSD2"
}


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};