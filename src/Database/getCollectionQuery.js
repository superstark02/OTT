import { db } from '../firebase'

export function getLatest(name, filter) {

    return new Promise((resolve, reject) => {

        var data = [];

        const collection = db.collection(name);
        collection.where('year', '>', filter).get().then(snapshot => {
            if (snapshot.empty) {
                reject("Empty")
            }
            else {
                snapshot.forEach(doc => {
                    data.push(doc.data())
                });
                
                resolve(data)
            }
        })

    });
}

export default function getCollectionQuery(name, filter) {

    return new Promise((resolve, reject) => {

        var data = [];

        const collection = db.collection(name);
        collection.where('keywords', 'array-contains', filter).get().then(snapshot => {
            if (snapshot.empty) {
                reject("Empty")
            }
            else {
                snapshot.forEach(doc => {
                    data.push(doc.data())
                });
                
                resolve(data)
            }
        })

    });
}