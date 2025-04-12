
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAhWqOgjKDaGvjWUJK43kmI9JhXxRFq--s",
  authDomain: "prepwise-55ffd.firebaseapp.com",
  projectId: "prepwise-55ffd",
  storageBucket: "prepwise-55ffd.firebasestorage.app",
  messagingSenderId: "770006088199",
  appId: "1:770006088199:web:e6d78b409463a3e49ec8a2",
  measurementId: "G-S0WV2C8W66"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
