import { db } from '../firebase'

export default function getFormData(uid, doc_name) {
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection("FormUsers").doc(uid).collection("Forms").doc(doc_name)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    resolve("Empty")
                }
            })
            .catch(reason => {
                reject(reason);
            });
    });
}