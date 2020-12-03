import { db } from "../firebase";

export function uploadData(data) {

    var i = 0;

    for (i; i < data.length; i++) {

        db.collection(data[i].industry).doc(data[i].platform).collection(data[i].genre).doc(data[i].id)
            .set(data[i]).then(result => {
                console.log(" Done")

            }).catch(error => {
                console.log(error)
            })

        db.collection("Index").doc(data[i].id)
            .set({
                ganre: data[i].genre,
                id: data[i].id,
                industry: data[i].industry,
                name: data[i].name,
                platform: data[i].platform,
                poster: data[i].poster
            }).then(result => {
                console.log(" Done")

            }).catch(error => {
                console.log(error)
            })

        db.collection(data[i].industry).doc(data[i].platform).collection(data[i].genre).doc(data[i].id).collection("Season-1").doc("episode-1")
            .set({
                content:""
            }).then(result => {
                console.log(" Done")

            }).catch(error => {
                console.log(error)
            })

    }


}