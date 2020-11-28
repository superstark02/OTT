import { db } from '../firebase'

export default function getShow(industry, platform, genre, id) {

    return new Promise((resolve, reject) => {

        db.collection(industry).doc(platform).collection(genre).doc(id)
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