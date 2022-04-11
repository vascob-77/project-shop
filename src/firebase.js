import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQ7eNdS2iuMtq8Fee2eVUjAgCyu0ZMCiE",
    authDomain: "shop-vasco-b39a4.firebaseapp.com",
    projectId: "shop-vasco-b39a4",
    storageBucket: "shop-vasco-b39a4.appspot.com",
    messagingSenderId: "657370799258",
    appId: "1:657370799258:web:6d62b3c574215354eb9323",
    measurementId: "G-58NPZ3Y45Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export {db,auth};
