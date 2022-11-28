import { initializeApp } from "firebase/app";

// ? authentication
import { getAuth } from "firebase/auth";

// ? database
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg0REQZX2PD6YrCqS5jluuFzjf2FqJd8Q",
  authDomain: "odinprojects-2c0bc.firebaseapp.com",
  projectId: "odinprojects-2c0bc",
  storageBucket: "odinprojects-2c0bc.appspot.com",
  messagingSenderId: "1000502744650",
  appId: "1:1000502744650:web:1643c0beafacb99482b8b3",
};

const app = initializeApp(firebaseConfig);

// ? exports
export const auth = getAuth(app);
export const db = getFirestore(app);
