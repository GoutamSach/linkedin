import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
import { collection, getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoRq1JuXE7NZGd3sMPz8i5SxW2TnnrJ_0",
  authDomain: "linkedin-clone-acae4.firebaseapp.com",
  projectId: "linkedin-clone-acae4",
  storageBucket: "linkedin-clone-acae4.appspot.com",
  messagingSenderId: "316842659365",
  appId: "1:316842659365:web:5c976fbf47266280dab9cc",
};

const app = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const databases = getDatabase(app);
// const auth = getAuth(app);
const db = getFirestore(app);
const coll = collection(db, "post");

export { coll, db };
export default app;
