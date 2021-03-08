/* eslint-disable prettier/prettier */
import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDMZ2OLrndseKa8QGUhZTcmTv91qasVuCw",
  authDomain: "safesend-72ba0.firebaseapp.com",
  databaseURL: "https://safesend-72ba0-default-rtdb.firebaseio.com",
  projectId: "safesend-72ba0",
  storageBucket: "safesend-72ba0.appspot.com",
  messagingSenderId: "523068433208",
  appId: "1:523068433208:web:d2d849c098f6d4244ed7cd",
  measurementId: "G-9QHVK52TNJ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.database();
export default firebase;


//export const database = firebase.database().ref('access');
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDMZ2OLrndseKa8QGUhZTcmTv91qasVuCw",
    authDomain: "safesend-72ba0.firebaseapp.com",
    databaseURL: "https://safesend-72ba0-default-rtdb.firebaseio.com",
    projectId: "safesend-72ba0",
    storageBucket: "safesend-72ba0.appspot.com",
    messagingSenderId: "523068433208",
    appId: "1:523068433208:web:d2d849c098f6d4244ed7cd",
    measurementId: "G-9QHVK52TNJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/
