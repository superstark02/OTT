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

export function getByWord(name, filter) {

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

export default function getCollectionQuery(name, filter) {

    return new Promise((resolve, reject) => {

        var data = [];

        const collection = db.collection(name);

        collection.get().then(snapshot => {
            if (snapshot.empty) {
                reject("Empty")
            }
            else {
                snapshot.forEach(doc => {
                    if (search(doc.data().keywords, filter[0]) && search(doc.data().keywords, filter[1]) ) {
                        data.push(doc.data())
                    }
                });
                resolve(data)
            }
        }).catch(e => {
            reject(e)
        })
    });
}

function search(array, filter){
    for(var k = 0; k < array.length; k++){
        if(array[k]===filter){
            return true
        }
    }
    return false
}