import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjyB7FFVsMGJ3wUF0v4Haw1HWlcdOvPYI",
    authDomain: "primordial-mile-233801.firebaseapp.com",
    databaseURL: "https://primordial-mile-233801.firebaseio.com",
    projectId: "primordial-mile-233801",
    storageBucket: "primordial-mile-233801.appspot.com",
    messagingSenderId: "1033102123281",
    appId: "1:1033102123281:web:36302fa32cbc12ec10acb0",
    measurementId: "G-6QW3R0KC8T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
