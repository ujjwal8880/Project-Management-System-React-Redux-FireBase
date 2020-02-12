import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration

// Replace firebaseConfig with Your Own configurations

var firebaseConfig = {
    apiKey: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    authDomain: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    databaseURL: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    projectId: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    storageBucket: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    messagingSenderId: "AAAAAAAAAAAAA",
    appId: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    measurementId: "A-AAAAAAAAAA"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
