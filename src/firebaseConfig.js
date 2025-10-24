import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Hl-lkM1WsfcJMcKUS21NwWJxdwdh4fA",
  authDomain: "unbox-insight.firebaseapp.com",
  projectId: "unbox-insight",
  storageBucket: "unbox-insight.firebasestorage.app",
  messagingSenderId: "101553203607",
  appId: "1:101553203607:web:bac4299519895fe86f7cd2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;