import firebase from "firebase/app";
import "firebase/auth";

export const Auth_Firbase = firebase.initializeApp({
    apiKey: "AIzaSyDZYUmMvQlVxpJx1l5NXvZZ_lAPUtSTSE8",
    authDomain: "chachagram-16ad8.firebaseapp.com",
    projectId: "chachagram-16ad8",
    storageBucket: "chachagram-16ad8.appspot.com",
    messagingSenderId: "419662623006",
    appId:  "1:419662623006:web:cc9262a285e037286ed90f"
  }).auth();