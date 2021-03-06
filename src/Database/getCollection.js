import { db } from '../firebase'

export default function getCollection(name) {

    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(name)
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
    });
}