// eslint-disable-next-line
import firebaseApp from 'firebase/app'
// eslint-disable-next-line
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB_EZ3cDvegSWKlwB1Pf8d-O90PyPlgj1s",
    authDomain: "crud-udemy-ract.firebaseapp.com",
    projectId: "crud-udemy-ract",
    storageBucket: "crud-udemy-ract.appspot.com",
    messagingSenderId: "570954045889",
    appId: "1:570954045889:web:4526feb2247d3bd8e6b740"
};
// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);

export {firebaseApp}