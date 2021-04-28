import firebase from "firebase";
require("@firebase/firestore");

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAHydBlvOrW7svJ-ZHM5c9b6rwx-zExTao",
  authDomain: "story-hub-c6ac3.firebaseapp.com",
  projectId: "story-hub-c6ac3",
  storageBucket: "story-hub-c6ac3.appspot.com",
  messagingSenderId: "422436104636",
  appId: "1:422436104636:web:6b12bccd607c3efe5523b9",
  measurementId: "G-XCKRLHBW92",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
