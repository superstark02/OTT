import firebase, { db } from '../firebase'
export default function LogIn() {

    return new Promise((resolve, reject) => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            console.log(result.user.displayName)
            resolve(result.user.displayName)
        }).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            db.collection("LoginErrors").doc(email).set(
                {
                    errorMessage: errorMessage,
                    email: email,
                    credential: credential
                }
            )
        });

    });
}

export function updateUser(uid, name, mail, device) {
    return new Promise((resolve, reject) => {

        db.collection("Users").doc(uid).set({
            name: name,
            uid: uid,
            mail: mail
        }).then(r => {
            db.collection("Users").doc(uid).collection("Devices").doc(device).set(
                { device: device }
            )
        })

    });
}

export function saveTime(time, series_id, season, episode) {
    return new Promise((resolve, reject) => {

        var uid =  window.Android.getUid();
        if (uid) {
            db.collection("Users").doc(uid).collection("Times").doc(series_id + "-" + season + '-' + episode).set({
                time: time
            })
        }

    });
}