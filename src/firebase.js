import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBM1FhVSK7ULTIEy849EVQtTMKb1w49sW0",
    authDomain: "chequemate-d3705.firebaseapp.com",
    projectId: "chequemate-d3705",
    storageBucket: "chequemate-d3705.appspot.com",
    messagingSenderId: "477577831525",
    appId: "1:477577831525:web:07a4fc157e9a9c6410d28c",
    measurementId: "G-CJHLE6H0SV"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();