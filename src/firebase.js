import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAL9MFNhjwcedWF3iB7-hJAlVgOfR_SqFc",
    authDomain: "crud-437b4.firebaseapp.com",
    projectId: "crud-437b4",
    storageBucket: "crud-437b4.appspot.com",
    messagingSenderId: "211644026033",
    appId: "1:211644026033:web:b44134b601289636a2a690"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);