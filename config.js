import firebase from 'firebase';
require('firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD2-k98LRMnAIahkKSclWgnB4kFkosnPXs",
    authDomain: "bed-time-story-c8a6e.firebaseapp.com",
    databaseURL: "https://bed-time-story-c8a6e.firebaseio.com",
    projectId: "bed-time-story-c8a6e",
    storageBucket: "bed-time-story-c8a6e.appspot.com",
    messagingSenderId: "202443452423",
    appId: "1:202443452423:web:d2a80d7136db7e31a03aa2",
    measurementId: "G-NFZSMSFSLD"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();