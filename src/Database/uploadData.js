import { db } from "../firebase";
import { addDoc } from "./addDoc";
import getSeasons from "./getSeason";
import getCollection from "./getCollection"

export function uploadData() {

    var i = 0;

    getCollection("Content").then(snap=>{

        for (i = 0; i < snap.length; i++) {
    
            getSeasons("Bollywood", "Web", "Family", "tvftripling" ).then(s => {
                if(s.length>0){
                    for( var j = 0; j < s.length; j++){
                        db.collection("Content").doc("tvftripling").collection("Season-1").doc("episode-"+(j+1)).set(s[j]).then(i=>{
                            console.log(j + "- Done")
                        })
                    }
                    
                }
            })
        }
        console.log("Complete")
    })

    

    //for (i; i < data.length; i++) {

    {/*db.collection(data[i].industry).doc(data[i].platform).collection(data[i].genre).doc(data[i].id)
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
            })*/}

    //}


}