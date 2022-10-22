import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const authStateChanged = (callBack) => onAuthStateChanged(auth, callBack);
const createUserAccout = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
const userSignIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
const userSignOut = () => signOut(auth);

export { authStateChanged, createUserAccout, userSignIn, userSignOut };
export default db;
