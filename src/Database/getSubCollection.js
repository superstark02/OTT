import { db } from '../firebase'

export default function getSubCollection(industry , platform, genre){
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(industry).doc(platform).collection(genre)
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
