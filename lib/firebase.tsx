'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpZSv8zbGnw5rThdRjeNRwVFj7g_yBvHE",
    authDomain: "quantumwaveit-20f81.firebaseapp.com",
    projectId: "quantumwaveit-20f81",
    storageBucket: "quantumwaveit-20f81.appspot.com",
    messagingSenderId: "833307620762",
    appId: "1:833307620762:web:824a86e2337738b2137623",
    measurementId: "G-6MD50HKX57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://quantumwaveit-20f81.appspot.com')
const db = getFirestore(app)
const auth = getAuth(app)
export { app as firebase_app, firebaseConfig, storage, db, auth }
