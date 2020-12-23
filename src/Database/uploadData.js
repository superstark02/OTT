import { db } from "../firebase";
//import getSubCollection from "./getSubCollection";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "thegirlnextdoor",
            name: "The Girl Next Door",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FTheGirlNextDoor%2Ftgnd.jpg?alt=media&token=f0b48a7b-3a59-4240-95af-aeecec98f2db",
            year: "2004",
            keywords: ["Movie", "Hollywood", "Comedy", "Romance"],
            genre: "Comedy/Romance",
            leng: "1h 50m",
            rate: "0",
            season: 0,
            description: "Matthew, a high school senior, thinks that he has found the woman of his dreams. However, he soon learns that Danielle, the object of his affection, is a former adult film actress."
        },
    ]

    var episodes = [
        {
            content: "",
            date: "",
            name: "",
        },
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
                keywords: data[i].keywords,
                poster: data[i].poster,
                year: data[i].year,
                app: data[i].app,
                country: data[i].country,
                leng: data[i].leng,
                season: data[i].season,
                description: data[i].description
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

    /*for (i = 0; i < episodes.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-0" + (i + 1),
                image: "",
                name: episodes[i].name,
            }
        }
        else {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-" + (i + 1),
                image: "",
                name: episodes[i].name
            }
        }
        db.collection("Content").doc("ozark").collection("Season-1").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })

    }*/



}







