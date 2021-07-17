import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbu6rjF8BYYbzqECHCpx9T54fG97ACUUU",
  authDomain: "instagram-clone-8ed1e.firebaseapp.com",
  projectId: "instagram-clone-8ed1e",
  storageBucket: "instagram-clone-8ed1e.appspot.com",
  messagingSenderId: "244966279129",
  appId: "1:244966279129:web:64c914c27bce8ce772fbc8",
  measurementId: "G-7S36Q2QYBX"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db,auth, provider, storage };
