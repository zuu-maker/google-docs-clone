import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAr_GmvySp2YhWEmBbzSKKpO1s6mlK_rcQ",
    authDomain: "docs-clone-1a85b.firebaseapp.com",
    projectId: "docs-clone-1a85b",
    storageBucket: "docs-clone-1a85b.appspot.com",
    messagingSenderId: "403959750399",
    appId: "1:403959750399:web:39b24f097c32181c3076ca"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)  : firebase.app();
const db = app.firestore();

export default db;