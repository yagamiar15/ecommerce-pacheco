import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSnnEq9LEtFKdbwU3z7x9wJnkuTrHiE7Y",
  authDomain: "ecommerce-pacheco.firebaseapp.com",
  projectId: "ecommerce-pacheco",
  storageBucket: "ecommerce-pacheco.appspot.com",
  messagingSenderId: "239658574460",
  appId: "1:239658574460:web:106653db7b1c4c7e545ff9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);