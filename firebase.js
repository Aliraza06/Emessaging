import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBVqZ8EI5ZopX0h2vCqSgAJtfne5Tj5BM4",
    authDomain: "emessenger-71f41.firebaseapp.com",
    projectId: "emessenger-71f41",
    storageBucket: "emessenger-71f41.appspot.com",
    messagingSenderId: "479594849454",
    appId: "1:479594849454:web:855dbbca76d6ab09c6393f"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{db, auth, provider };
