import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4L5I01f3SJPHIjbSUInzfdnu8wBUkyw4",
  authDomain: "mymoney-522fd.firebaseapp.com",
  projectId: "mymoney-522fd",
  storageBucket: "mymoney-522fd.appspot.com",
  messagingSenderId: "463123851552",
  appId: "1:463123851552:web:e0b8c921f23ba258f28f45",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
