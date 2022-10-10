// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aVq3XNbeWWNw9SZTmnoZhP3NQd6rSRY",
  authDomain: "salon-web-e4694.firebaseapp.com",
  projectId: "salon-web-e4694",
  storageBucket: "salon-web-e4694.appspot.com",
  messagingSenderId: "446820155148",
  appId: "1:446820155148:web:a67151cc3ba0fe8f5b9329"
};

// Initialize Firebase
const app =!getApps().length ?  initializeApp(firebaseConfig):getApp;
const db= getFirestore();
const storage= getStorage();
export{app, db, storage};