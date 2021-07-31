import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDulK_Psp_mhTRg7z4HHspOIMyIYROW0I",
  authDomain: "react-slack-5529a.firebaseapp.com",
  projectId: "react-slack-5529a",
  storageBucket: "react-slack-5529a.appspot.com",
  messagingSenderId: "325310322620",
  appId: "1:325310322620:web:2c123c8758348b3759fdb9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //the command that will pop up for google authentication.

export { auth, provider, db };
