// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI0HMjYMVwv_hxogMO5Zhjul98vUjnHQo",
  authDomain: "crwn-clothing-db-7803e.firebaseapp.com",
  projectId: "crwn-clothing-db-7803e",
  storageBucket: "crwn-clothing-db-7803e.appspot.com",
  messagingSenderId: "641227593019",
  appId: "1:641227593019:web:2c22ccdac6df7e1e0c931e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore(firebaseApp);

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("🚀 ~ file: firebase.utils.js:37 ~ createUserDocFromAuth ~ userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    console.log("USER EXISTS");
    return userDocRef;
  }

  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
  } catch (error) {
    console.log(`Error in creating user doc ${error.message}`);
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
