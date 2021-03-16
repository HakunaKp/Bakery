import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBb5VtK5QeipG1piMFcEQG7iuLFYRZkj_g",
authDomain: "store-gallery.firebaseapp.com",
databaseURL: "https://store-gallery-default-rtdb.firebaseio.com",
projectId: "store-gallery",
storageBucket: "store-gallery.appspot.com",
messagingSenderId: "570606704419",
appId: "1:570606704419:web:7469f831e852d6cb6d5e96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };