// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2WaLu3D52pP51WexaDLODl2A-L5Afke0",
  authDomain: "login-app-847a8.firebaseapp.com",
  projectId: "login-app-847a8",
  storageBucket: "login-app-847a8.firebasestorage.app",
  messagingSenderId: "646323697762",
  appId: "1:646323697762:web:71507af716a8a28389793b",
  measurementId: "G-RVTPL9051J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
