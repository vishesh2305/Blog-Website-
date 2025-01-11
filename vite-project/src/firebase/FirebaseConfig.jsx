// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrz295TDxL8iRS_HAl6ZTghJuflRSyhls",
  authDomain: "blogspot-8758c.firebaseapp.com",
  projectId: "blogspot-8758c",
  storageBucket: "blogspot-8758c.firebasestorage.app",
  messagingSenderId: "452252881399",
  appId: "1:452252881399:web:00406a83c60e2b97ed1ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { fireDb, auth, storage };