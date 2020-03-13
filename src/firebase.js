  import firebase from 'firebase';
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAOsR-qdwzQL41VE2hnF9WePtlc9s_yw4s",
    authDomain: "global-chat-7dcd9.firebaseapp.com",
    databaseURL: "https://global-chat-7dcd9.firebaseio.com",
    projectId: "global-chat-7dcd9",
    storageBucket: "global-chat-7dcd9.appspot.com",
    messagingSenderId: "488958275718",
    appId: "1:488958275718:web:ef2c37c1a15864156ce107"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(config);