import firebase from 'firebase';

//Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;