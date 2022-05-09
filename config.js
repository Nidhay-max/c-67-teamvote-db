import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBSvyGKe3Ab19MUsCsh5JspoDCxbNwKMkg",
  authDomain: "team-voting-636c0.firebaseapp.com",
  projectId: "team-voting-636c0",
  storageBucket: "team-voting-636c0.appspot.com",
  messagingSenderId: "309415232071",
  appId: "1:309415232071:web:c12d5d7aa766bdd92f2762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();