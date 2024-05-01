// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Yc4SPBA4HT-KFs_me_kI0QRrqF9V1n8",
  authDomain: "nexus-p2.firebaseapp.com",
  projectId: "nexus-p2",
  storageBucket: "nexus-p2.appspot.com",
  messagingSenderId: "858532865393",
  appId: "1:858532865393:web:c396842b92d93d3f2d42d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;