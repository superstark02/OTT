import { db } from "../firebase";
//import getSubCollection from "./getSubCollection";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "6underground",
            name: "6 Underground",
            country: "USA",
            app: "Netflix",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2F6Underground%2F6u.jpg?alt=media&token=cc2ad2f0-63b2-4cbe-8857-789c22474b43",
            year: "2019",
            keywords: ["Movie", "Hollywood", "Action", "Thriller"],
            genre: "Action/Thriller",
            leng: "2h 8m",
            rate: "0",
            season: 0,
            description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2F6Underground%2F6%20Underground%20starring%20Ryan%20Reynolds%20_%20Official%20Trailer%20_%20Netflix.mp4?alt=media&token=6d7cf80e-ddd1-4615-b406-c200b92ba781"
        }
    ]

    var episodes = [
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2013%20%5BEnglish%20Sub%5D.mp4?alt=media&token=69e43188-6df0-4c71-b4d1-b923d878fa86",
            date: "Apr 10, 2019",
            name: "Return of the Hero",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2014%20%5BEnglish%20Sub%5D.mp4?alt=media&token=f27051c5-43d7-449b-906e-e311b112685a",
            date: "Apr 17, 2019",
            name: "Human Monster",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2015%20%5BEnglish%20Sub%5D.mp4?alt=media&token=8a4b78b3-f252-4ef7-a17d-51272bcf0abd",
            date: "Apr 24, 2019",
            name: "The Hunt Begins",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2016%20%5BEnglish%20Sub%5D.mp4?alt=media&token=9e86871d-010e-4a56-96e8-f604e3ce1e13",
            date: "May 1, 2019",
            name: "Metal Bat",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2017%20%5BEnglish%20Sub%5D.mp4?alt=media&token=4e6b2163-7749-45ff-8cf7-ce9a777b82a9",
            date: "May 8, 2019",
            name: "The Martial Arts Tournament",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2018%20%5BEnglish%20Sub%5D.mp4?alt=media&token=082b4f63-be42-47b4-885d-fd341af4ad5c",
            date: "May 15, 2019",
            name: "The Monster Uprising",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2019%20%5BEnglish%20Sub%5D.mp4?alt=media&token=4f37ccc9-8d2b-43e8-8951-bd7138f1cd0a",
            date: "May 22, 2019",
            name: "The Class S Heroes",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2020%20%5BEnglish%20Sub%5D.mp4?alt=media&token=e17dd0e3-1911-49be-84fa-29f2b4246537",
            date: "May 29, 2019",
            name: "The Resistance of the Strong",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2021%20%5BEnglish%20Sub%5D.mp4?alt=media&token=dd5afc50-c41a-4a9d-81e7-0a0398ea2913",
            date: "Jun 12, 2019",
            name: "The Ultimate Dilemma",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2022%20%5BEnglish%20Sub%5D.mp4?alt=media&token=c966b954-5289-4337-98a7-6c60ac77a481",
            date: "Jun 19, 2019",
            name: "The Encircling Net of Justice",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2023%20%5BEnglish%20Sub%5D.mp4?alt=media&token=0f980392-d212-4ba7-a265-c4bb0e8667f3",
            date: "Jun 26, 2019",
            name: "The Varieties of Pride",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2024%20%5BEnglish%20Sub%5D.mp4?alt=media&token=044d5ea5-ba50-4b9f-8b76-b49e9d6e0db9",
            date: "Jul 3, 2019",
            name: "The Wiping of the Disciple's Butt",
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


    /*for (i = 0; i < data.length; i++) {
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
    }*/

    for (i = 0; i < episodes.length; i++) {
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

    }

}







