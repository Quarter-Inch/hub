  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSDkYVRe-xdYqcLCZ0yW3uuje4f4EQ6mc",
    authDomain: "questetraassistant.firebaseapp.com",
    databaseURL: "https://questetraassistant.firebaseio.com",
    projectId: "questetraassistant",
    storageBucket: "questetraassistant.appspot.com",
    messagingSenderId: "1096123953452"
  };
  firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().useDeviceLanguage();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});