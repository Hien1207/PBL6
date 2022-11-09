import firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDQM31u0DEV9K1ihsBkyd6lcc_lc8Ou0Wg",
  authDomain: "testotp123-8c200.firebaseapp.com",
  projectId: "testotp123-8c200",
  storageBucket: "testotp123-8c200.appspot.com",
  messagingSenderId: "945689161740",
  appId: "1:945689161740:web:6fb81f15e2511c85a3fe29",
  measurementId: "G-9TQPDR6JB3"
};

if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig)
}

export default firebaseConfig;