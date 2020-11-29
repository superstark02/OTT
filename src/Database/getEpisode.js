import { db } from '../firebase'

export default function getEpisode(industry , platform, genre, id, season, episode){
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(industry).doc(platform).collection(genre).doc(id).collection(season).doc(episode)
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