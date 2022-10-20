// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection  } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgh7eLIhRS1gYNm95l2DWsIjKoqJ8q4EE",
  authDomain: "testing-firebase-3f3c3.firebaseapp.com",
  projectId: "testing-firebase-3f3c3",
  storageBucket: "testing-firebase-3f3c3.appspot.com",
  messagingSenderId: "736871808886",
  appId: "1:736871808886:web:bebff906bf34c0d137c457"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);

// Get a reference to the collection
export const colRef = collection(db , 'events')

