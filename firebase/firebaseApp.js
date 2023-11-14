import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


    const firebaseConfig = {
      apiKey: "AIzaSyBg6gCZ_OIvzgZrkDk9dcG9KYZ6V7Ackk0",
      authDomain: "streamsphere-8bace.firebaseapp.com",
      databaseURL: "https://streamsphere-8bace-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "streamsphere-8bace",
      storageBucket: "streamsphere-8bace.appspot.com",
      messagingSenderId: "540388755259",
      appId: "1:540388755259:web:ea3b2d1fcc0ab1ef69991e",
      measurementId: "G-K103D7EVXT"
    };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
//   firebase.analytics();

  
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const googleSignIn = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
    'display': 'popup'
  });
export const facebookSignIn = () => auth.signInWithPopup(facebookProvider);

export default firebase;