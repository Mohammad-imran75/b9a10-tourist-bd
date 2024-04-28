
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_IKEY,
  authDomain: import.meta.env.VITE_THDOMAIN,
  projectId: import.meta.env.VITE_OJECTID,
  storageBucket: import.meta.env.VITE_ORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SSAGINGSENDERID,
  appId: import.meta.env.VITE_PID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
