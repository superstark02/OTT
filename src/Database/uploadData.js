import { db } from "../firebase";
import getSubCollection from "./getSubCollection";
//import {getByWord} from './getCollectionQuery'

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "tumharisulu",
            name: "Tumhari Sulu",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FTumhari%20Sulu%2Fts.jpg?alt=media&token=29c23455-2983-4a59-91e6-7b59b55ed776",
            year: "2017",
            keywords: ["Movie", "Bollywood", "Drama", "Comedy"],
            genre: "Drama/Comedy",
            leng: "2h 30m",
            rate: "0",
            season: 0,
            description: "Sulu, an ambitious housewife, lives happily with her husband and her son. Things change when she wins a contest and auditions for a night show at a radio station.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FTumhari%20Sulu%2FOfficial%20Trailer_%20Tumhari%20Sulu%20_%20Vidya%20Balan%20_%20Releasing%20on%2017th%20November%202017.mp4?alt=media&token=6935a344-ce5f-40aa-8c1e-34c4859c6f08"
        },
        {
            id: "raazreboot",
            name: "Raaz Reboot",
            country: "India",
            app: "r",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FRaaz%20Reboot%2Frr.jpg?alt=media&token=d98f4fa3-2c60-46f3-9e1a-bc3eb84f33bb",
            year: "2016",
            keywords: ["Movie", "Bollywood", "Horror", "Romance"],
            genre: "Horror/Romance",
            leng: "2h 8m",
            rate: "0",
            season: 0,
            description: "Newly-weds Rehaan and Shaina move to Romania after the former is offered a job. When Shaina senses paranormal activity around her, she learns that her husband is harbouring a secret from her.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FRaaz%20Reboot%2FRAAZ%20REBOOT_%20Official%20Trailer%20_%20Emraan%20Hashmi%2C%20Kriti%20Kharbanda%2C%20Gaurav%20Arora.mp4?alt=media&token=2fcce977-5735-4bd0-abbc-9d05b33ac0bc"
        },
        {
            id: "partner",
            name: "Partner",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FPartner%2Fpartner.jpg?alt=media&token=6f108ac4-6632-44f2-ad2b-8bb2ee32180e",
            year: "2007",
            keywords: ["Movie", "Bollywood", "Comedy", "Romance", 'Salman Khan'],
            genre: "Comedy/Romance",
            leng: "2h 35m",
            rate: "0",
            season: 0,
            description: "Prem, a love guru who shares tips on dating women, helps his client, Bhaskar, woo his boss. However, he later falls for a single mother and tries to hide his profession.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FPartner%2Fpartner%20(online-video-cutter.com).mp4?alt=media&token=83bc17af-1360-4919-a995-4a388fd02cb7"
        },
        {
            id: "golmaal",
            name: "Golmaal: Fun Unlimited",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FGolmaal%2Fgolmal.jpg?alt=media&token=687a5f65-5fb1-4ee2-8b71-c565e242d6d3",
            year: "2006",
            keywords: ["Movie", "Bollywood", "Comedy", "Golmaal"],
            genre: "Comedy",
            leng: "2h 30m",
            rate: "0",
            season: 0,
            description: "Friends Gopal, Lucky, Madhav and Laxman often dupe gullible people out of their money. Hilarity ensues when they target a middle-aged couple and simultaneously try wooing their pretty neighbour.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FGolmaal%2FGolmaal%20-%20Fun%20Unlimited%20Official%20Trailer.mp4?alt=media&token=fad4c0fa-65f8-42e9-9b49-0a79e314ad16"
        },
        {
            id: "5Weddings",
            name: "5 Weddings",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2F5%20Weddings%2F5w.jpg?alt=media&token=e3faef6f-f66e-43fe-877e-2c854ab0e09d",
            year: "2018",
            keywords: ["Movie", "Bollywood", "Drama", "Romance", "Rajkumar Rao"],
            genre: "Drama/Romance",
            leng: "1h 30m",
            rate: "0",
            season: 0,
            description: "Shania Dhaliwal, an American journalist, visits India to cover Indian weddings. However, Harbhajan Singh, a police officer, interrupts her work as he believes she has hidden motives.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2F5%20Weddings%2F'5%20Weddings'%20_%2026%20OCT%20_%20%20Nargis%20Fakhri%2C%20Rajkummar%20Rao%2C%20Bo%20Derek%2C%20Candy%20Clark.mp4?alt=media&token=7fa9f1e4-33db-4256-a180-3ee6fc498b86"
        },
        {
            id: "dilchahtahai",
            name: "Dil Chahta Hai",
            country: "India",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FDil%20Chata%20Hai%2Fdch.jpg?alt=media&token=89663a3d-73fe-4ed6-8ea6-2003e021b0df",
            year: "2001",
            keywords: ["Movie", "Bollywood", "Musical", "Romance", 'Drama', 'Amir Khan'],
            genre: "Musical/Romance",
            leng: "3h 5m",
            rate: "0",
            season: 0,
            description: "Three close friends are separated after college due to their different approaches towards relationships. Akash goes to Australia, Sameer gets busy wooing a girl and Siddharth devotes himself to art.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FMovies%2FDil%20Chata%20Hai%2Fdvh.mp4?alt=media&token=53f90bb2-fdd5-42cc-8c2a-0ec2ebc8547b"
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


    /*for (i = 0; i < data.length; i++) {
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
    }*/

    for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id).collection('Season-1').doc('episode-01').set({
            content: "",
        }).then(e=>{
            console.log("Done")
        })
    }

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







