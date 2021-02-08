import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6kHgGnzqji1cFcEQeYzx8oR3dN3-ixas",
  authDomain: "drive-clone-b2759.firebaseapp.com",
  projectId: "drive-clone-b2759",
  storageBucket: "drive-clone-b2759.appspot.com",
  messagingSenderId: "787433155298",
  appId: "1:787433155298:web:a2107bf677d2fbf4440cbb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
