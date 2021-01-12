import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyBVidoEDucVacGf637qCgn5qEaZciFAx-I",
    authDomain: "twitter-clone-cf818.firebaseapp.com",
    databaseURL: "https://twitter-clone-cf818.firebaseio.com",
    projectId: "twitter-clone-cf818",
    storageBucket: "twitter-clone-cf818.appspot.com",
    messagingSenderId: "361851015463",
    appId: "1:361851015463:web:7c7f1f336bf567faa05902",
    measurementId: "G-YJB3Q6TH5M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;