import firebase from '../firebase'

export default function getUser() {
    return new Promise((resolve, reject) => {

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve({
                    name:user.displayName,
                    uid: user.uid,
                    email: user.email
                })
            }
            else{
                resolve(-1)
            }
        })

    });
}

export function getUserUID() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user.uid)
            }
            else{
                resolve(-1)
            }
        })

    });
}

export function getUserEmail() {
    return new Promise((resolve, reject) => {

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user.email)
            }
            else{
                resolve(-1)
            }
        })

    });
}