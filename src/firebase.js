import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWJfk-eBkIB8vFRQ773w3XUsyIQ2tcJC4",
  authDomain: "fir-react-tutorial-ae964.firebaseapp.com",
  projectId: "fir-react-tutorial-ae964",
  storageBucket: "fir-react-tutorial-ae964.appspot.com",
  messagingSenderId: "665293135625",
  appId: "1:665293135625:web:9b3267c86f225cf443fdd8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
