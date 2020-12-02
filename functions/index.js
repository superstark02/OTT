const functions = require('firebase-functions');
const express = require('express');
const firebase = require('firebase');

//Firebase init
firebase.initializeApp({
    apiKey: 'AIzaSyBr6TmUxKkRcpXAb9euN3CqSDbRJ3pCsyw',
    authDomain: "project-ott-d883c.firebaseapp.com",
    projectId: "project-ott-d883c"
});

//express init
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log("Listening at " + port) })

app.get("/sign-in", function (res, req) {

    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider).then(function(result) {
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

})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
