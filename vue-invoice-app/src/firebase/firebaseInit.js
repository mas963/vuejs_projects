import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA6QALUqgOzvgX4vmcJOdBghcp0ru4Lvjo",
    authDomain: "invoice-2ef2b.firebaseapp.com",
    projectId: "invoice-2ef2b",
    storageBucket: "invoice-2ef2b.appspot.com",
    messagingSenderId: "1041157891144",
    appId: "1:1041157891144:web:edf34fa50431292a07a47d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();