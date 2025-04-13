
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtJe4Lr_FVUJP4cDHYb3NulN2qx7Oq8iQ",
  authDomain: "prepwise-7a15a.firebaseapp.com",
  projectId: "prepwise-7a15a",
  storageBucket: "prepwise-7a15a.firebasestorage.app",
  messagingSenderId: "834266898731",
  appId: "1:834266898731:web:585d4770d866199425656e",
  measurementId: "G-JFLKNGNPF0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
