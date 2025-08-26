
import { getApp, initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getHeapSnapshot } from "v8";

const firebaseConfig = {
  apiKey: "AIzaSyBR7wySF8iNtrCG6zC6gUqOs5ASOyiH7PQ",
  authDomain: "ai-interview-prep-735cc.firebaseapp.com",
  projectId: "ai-interview-prep-735cc",
  storageBucket: "ai-interview-prep-735cc.firebasestorage.app",
  messagingSenderId: "182493244372",
  appId: "1:182493244372:web:29f10d26c9e9e22dae8441",
  measurementId: "G-NL0JKQ1HHG"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp()

export const auth = getAuth(app);

export const db = getFirestore(app);