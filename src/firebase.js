import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzMqh_0SJCEA2pjt1VMr48i0K2PwPdxW8",
  authDomain: "imessage-clone-27077.firebaseapp.com",
  databaseURL: "https://imessage-clone-27077.firebaseio.com",
  projectId: "imessage-clone-27077",
  storageBucket: "imessage-clone-27077.appspot.com",
  messagingSenderId: "394270032450",
  appId: "1:394270032450:web:bb4592da78b995085c63db",
  measurementId: "G-HYGM0ZEG6E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
