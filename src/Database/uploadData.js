import { db } from "../firebase";
import getSubCollection from "./getSubCollection";
//import {getByWord} from './getCollectionQuery'

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "article15",
            name: "Article 15",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FArticle15%2Fa15.jpg?alt=media&token=1e2c8339-a852-436f-bbbc-e318188f4ce6",
            year: "2019",
            keywords: ["Movie", "Bollywood", "Crime", "Drama", "Ayushmann Khurrana"],
            genre: "Crime/Drama",
            leng: "2h 20m",
            rate: "0",
            season: 0,
            description: "An upright city-bred police officer launches an attack against the caste system after caste-based discrimination and other crimes are dismissed in rural India.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FArticle15%2FArticle%2015%20-%20Trailer%20_%20Ayushmann%20Khurrana%20_%20Anubhav%20Sinha%20_%20Releasing%20on%2028June2019%20(1).mp4?alt=media&token=d93f3e68-c40c-45a8-bce6-8af0f291a5ce"
        },
        
    ]

    var episodes = [
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2013%20%5BEnglish%20Sub%5D.mp4?alt=media&token=69e43188-6df0-4c71-b4d1-b923d878fa86",
            date: "Apr 10, 2019",
            name: "Return of the Hero",
        }
    ]

    const cast = [
        {
            id: "kungfupanda",
            cast: [
                {
                    actor: "Jack Black",
                    role: "Po",
                    photo: ""
                }
            ]
        },
    ]


    for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                keywords: data[i].genre,
                poster: data[i].poster,
                year: data[i].year,
                app: data[i].app,
                country: data[i].country,
                leng: data[i].leng,
                season: data[i].season,
                description: data[i].description,
                trailer: data[i].trailer
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

    for (i = 0; i < data.length; i++) {
        db.collection("Index").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                keywords: data[i].keywords,
                poster: data[i].poster,
                year: data[i].year
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

    /*for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id).collection('Season-1').doc('episode-01').set({
            content: "",
        }).then(e=>{
            console.log("Done")
        })
    }*/

    /*for (i = 0; i < episodes.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-0" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2Fopmc.jpg?alt=media&token=884968e2-6e52-42a4-a206-4ae0dbd1bbe8",
                name: episodes[i].name,
            }
        }
        else {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2Fopmc.jpg?alt=media&token=884968e2-6e52-42a4-a206-4ae0dbd1bbe8",
                name: episodes[i].name
            }
        }
        db.collection("Content").doc("onepunchman").collection("Season-2").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })

    }*/

    /*getSubCollection("Content", "onepunchman", "Season-2").then(result=>{
        for(var a = 0; a < result.length; a++){
            db.collection("Anime").doc("onepunchman").collection("Season-2").doc(result[a].id).set(result[a]).then(o=>{
                console.log("Done")
            })
        }
    })*/

}


export function temp(){
    db.collection("Content").get().then(snap=>{
        snap.forEach(doc=>{
            if(doc.data().app==="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fzee5.png?alt=media&token=1d42762f-4b58-4da3-9418-72fa6383a83d"){
                db.collection("Content").doc(doc.id).update({appName:"ZEE 5"})
                console.log(doc.id)
            }
        })
    })
}




