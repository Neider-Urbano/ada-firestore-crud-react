import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApfdfz1BRemPC6XM_7jaiwRgNE-NO9StY",
  authDomain: "portfolio-neider.firebaseapp.com",
  projectId: "portfolio-neider",
  storageBucket: "portfolio-neider.appspot.com",
  messagingSenderId: "847828906421",
  appId: "1:847828906421:web:48807fd89fd3a476f669fc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
