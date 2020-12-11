import { db } from '../firebase'

export default function getSeasons(id, number) {
    return new Promise((resolve, reject) => {

        var data = [];

        for (var i = 0; i < parseInt(number); i++) {
            db.collection("Content").doc(id).collection("Season-" + (i+1))
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
        }
    });
}

        
