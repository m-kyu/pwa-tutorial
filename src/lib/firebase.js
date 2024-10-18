import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABzdJSY1ytU5ke6RPjf6SRZtlLfv8voXU",
  authDomain: "test-a0926.firebaseapp.com",
  projectId: "test-a0926",
  storageBucket: "test-a0926.appspot.com",
  messagingSenderId: "387616338664",
  appId: "1:387616338664:web:0281b58f2438488fcb4f5d",
  measurementId: "G-VDXK7BX94C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage  = getStorage(app);
export const db = getFirestore(app);