import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
import { collection, getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3FQ2KoDPPH6QJ_9o6bbh3stXG6nKTUWY",
  authDomain: "linkedin-dummy-71281.firebaseapp.com",
  projectId: "linkedin-dummy-71281",
  storageBucket: "linkedin-dummy-71281.appspot.com",
  messagingSenderId: "460013994197",
  appId: "1:460013994197:web:79e3387f0be7dfabefe25c",
  measurementId: "G-5VQH8Y2QCX",
};

const app = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const databases = getDatabase(app);
// const auth = getAuth(app);
const db = getFirestore(app);
const coll = collection(db, "post");

export { coll, db };
export default app;
