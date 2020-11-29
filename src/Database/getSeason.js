import { db } from '../firebase'

export default function getSeasons(industry , platform, genre, id){
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(industry).doc(platform).collection(genre).doc(id).collection("Season-1")
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