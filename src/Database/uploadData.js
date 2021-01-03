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
        {
            id: "badhaaiho",
            name: "Badhaai ho",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FBadhaiho%2Fbh.jpg?alt=media&token=b55facdd-617a-458f-9a4f-fbb3f344f4fd",
            year: "2018",
            keywords: ["Movie", "Bollywood", "Comedy", "Drama", "Ayushmann Khurrana"],
            genre: "Drama/Comedy",
            leng: "2h 4m",
            rate: "0",
            season: 0,
            description: "Nakul, a 25-year-old man, is shocked to discover that his mother is pregnant. His struggle to come to terms with the news puts his relationship with his girlfriend, Renee, in jeopardy.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FBadhaiho%2F%E2%80%98Badhaai%20Ho%E2%80%99%20Official%20Trailer%20_%20Ayushmann%20Khurrana%2C%20Sanya%20Malhotra%20_%20Director%20Amit%20Sharma.mp4?alt=media&token=7bcbe441-f2d3-4e8f-8d8f-19209b44f5ad"
        },
        {
            id: "detectivebyomkeshbakshy",
            name: "Detective Byomkesh Bakshy!",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FDetective%20Byomkesh%20Bakshy%2Fdbb.jpg?alt=media&token=17281665-b886-4c28-a393-b8046da55a60",
            year: "2015",
            keywords: ["Movie", "Bollywood", "Mystery", "Bollywood", "Sushant Singh Rajput", "Crime"],
            genre: "Mystery/Bollywood",
            leng: "2h 19m",
            rate: "0",
            season: 0,
            description: "Byomkesh, fresh out of college, agrees to investigate the disappearance of Bhuvan, a chemist. Assisted by Bhuvan's son Ajit, Byomkesh links the case to a larger conspiracy that will unsettle Calcutta.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FDetective%20Byomkesh%20Bakshy%2FDetective%20Byomkesh%20Bakshy%20_%20Official%20Trailer%20_%20Sushant%20Singh%20Rajput%20(1).mp4?alt=media&token=179a48f3-efa2-4cac-85c0-64205b3b3bec"
        },
        {
            id: "kaipoche",
            name: "Kai Po Che!",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FKaiPoChe%2Fkpc.jpg?alt=media&token=b4931426-7d1d-4e8d-8094-7e4b1087fca2",
            year: "2013",
            keywords: ["Movie", "Bollywood", "Sport", "Drama", "Sushant Singh Rajput"],
            genre: "Sport/Drama",
            leng: "2h 10m",
            rate: "0",
            season: 0,
            description: "Three friends start an academy to train aspiring cricketers. But before they realise their goals, they experience an earthquake, an unstable political situation and communal riots.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FKaiPoChe%2Fkpc.mp4?alt=media&token=3abfbfec-4a30-4984-b222-be1377e42267"
        },
        {
            id: "tarezameenpar",
            name: "Tare Zameen Par",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FTareZameenPar%2Ftzp.jpg?alt=media&token=b91654c8-a9b6-4715-9ea7-bbfaa22bea32",
            year: "2007",
            keywords: ["Movie", "Bollywood", "Drama", "Musical", "Aamir Khan"],
            genre: "Drama/Musical",
            leng: "2h 45m",
            rate: "0",
            season: 0,
            description: "Ishaan is criticised by his parents for his poor academic performance and is sent away to a boarding school. Ram, an art teacher, however, realises he has dyslexia and helps him uncover his potential.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FTareZameenPar%2Ftzp.mp4?alt=media&token=bacfa227-5cb2-4c65-8ff8-fc508788958c"
        }
        
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







