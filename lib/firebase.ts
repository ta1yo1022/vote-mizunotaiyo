import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo60cJyDzMSMr5e87nlMM4N27ZZkfErcg",
  authDomain: "vote-mizunotaiyo.firebaseapp.com",
  projectId: "vote-mizunotaiyo",
  storageBucket: "vote-mizunotaiyo.firebasestorage.app",
  messagingSenderId: "671367385166",
  appId: "1:671367385166:web:771c368ce22b673525b31f",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
