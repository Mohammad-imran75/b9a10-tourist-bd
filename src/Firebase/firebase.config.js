// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeTsE1SeYoFzdSC26PQ_zSb_xwcj62Rrk",
  authDomain: "tourism-management-websi-3c43c.firebaseapp.com",
  projectId: "tourism-management-websi-3c43c",
  storageBucket: "tourism-management-websi-3c43c.appspot.com",
  messagingSenderId: "813687025844",
  appId: "1:813687025844:web:94b6f7c492c8fc784d67e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
