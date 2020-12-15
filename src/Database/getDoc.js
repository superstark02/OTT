import { db } from '../firebase'

export default function getDoc(name,doc_name) {

    return new Promise((resolve, reject) => {

        db.collection(name).doc(doc_name)
            .get()
            .then(snapshot => {
                if(snapshot.exists){
                    resolve(snapshot.data());
                }
                else{
                    resolve("Empty")
                }
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

export function getTime( searies_id, season, episode) {

    return new Promise((resolve, reject) => {

        var uid = window.Android.getUid();

        db.collection("Users").doc(uid).collection(searies_id+"-"+season).doc(episode)
            .get()
            .then(snapshot => {
                if(snapshot.exists){
                    resolve(snapshot.data());
                }
                else{
                    resolve("Empty")
                }
            })
            .catch(reason => {
                reject(reason);
            });
    });
}