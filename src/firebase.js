// Import firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//------------------------------------------------------

// Set constant for where our firestore is located
const firebaseConfig = {
  apiKey: "AIzaSyBM1FhVSK7ULTIEy849EVQtTMKb1w49sW0",
  authDomain: "chequemate-d3705.firebaseapp.com",
  projectId: "chequemate-d3705",
  storageBucket: "chequemate-d3705.appspot.com",
  messagingSenderId: "477577831525",
  appId: "1:477577831525:web:07a4fc157e9a9c6410d28c",
  measurementId: "G-CJHLE6H0SV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export authenticate and firestore methods
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Constant
const provider = new firebase.auth.GoogleAuthProvider();

// Export sign in with google
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
  
// Export set up a user account with email and password
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

// Constant method to retrieve user information
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};