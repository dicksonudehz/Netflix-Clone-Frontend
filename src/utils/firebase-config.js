import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpw2vbOotQ-QMsLidmLMCe4mrrRthUkyI",
  authDomain: "react-netflix-clone-5981b.firebaseapp.com",
  projectId: "react-netflix-clone-5981b",
  storageBucket: "react-netflix-clone-5981b.appspot.com",
  messagingSenderId: "414917152625",
  appId: "1:414917152625:web:3ef6b7b6f18b78e74970d0",
  measurementId: "G-1W3FMZ1GSZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
