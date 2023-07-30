import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJu-hmno4smLO26TLwYX3TQFFcdzdyAfA",
  authDomain: "jakemate-6e892.firebaseapp.com",
  projectId: "jakemate-6e892",
  storageBucket: "jakemate-6e892.appspot.com",
  messagingSenderId: "117673521408",
  appId: "1:117673521408:web:9afb6a329bfacb87d743e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
