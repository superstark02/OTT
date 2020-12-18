import { db } from "../firebase";
import getSubCollection from "./getSubCollection";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "drstone",
            name: "Dr. Stone",
            country: "Japan",
            app: "",
            poster: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg",
            year: "2017",
            keywords: ["Anime", "Comedy", "Fiction", "Shounen"],
            leng: "1 Season",
            rate: "0",
            season: 1,
            description: "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone.Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuus brain's combine to forge a formidable partnership, and they soon uncover a method to revive those petrified."
        }
    ]

    var episodes = [
        {
            content: "",
            date: "21 July, 2017",
            name: "Sugarwood",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "Blue Cat",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "My Dripping Sleep",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "Tonight We Improvise",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "Ruling Days",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "Book of Ruth",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "Nest Box",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "	Kaleidoscope",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "Coffee, Black",
        },
        {
            content: "",
            date: "21 July, 2017",
            name: "The Toll",
        },
    ]

    var ozark = [
        {
            content: "",
            date: "August 22, 2014",
            name: "",
        }
    ]

    var bojack = [
        {
            content: "",
            date: "August 22, 2014",
            name: "BoJack Horseman: The BoJack Horseman Story, Chapter One"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "BoJack Hates the Troops"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Prickly-Muffin"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Zoës and Zeldas"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Live Fast, Diane Nguyen"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Our A-Story is a 'D' Story"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Say Anything"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "The Telescope"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Horse Majeure"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "One Trick Pony"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Downer Ending"
        },
        {
            content: "",
            date: "August 22, 2014",
            name: "Later"
        }
    ]

    var barry = [
        {
            content: "",
            name: "The Show Must Go On, Probably?",
            date: "31 Mar. 2019",
        },
        {
            content: "",
            date: "7 Apr. 2019",
            name: "The Power of No"
        },
        {
            content: "",
            date: "14 Apr. 2019",
            name: "Past = Present x Future Over Yesterday"
        },
        {
            content: "",
            date: "21 Apr. 2019",
            name: "What?!"
        },
        {
            content: "",
            date: "28 Apr. 2019",
            name: "ronny/lilly"
        },
        {
            content: "",
            date: "5 May 2019",
            name: "The Truth Has a Ring to It"
        },
        {
            content: "",
            date: "12 May 2019",
            name: "The Audition"
        },
        {
            content: "",
            date: "19 May 2019",
            name: "berkman > block"
        }
    ]


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
            })*/}


    /*for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id)
        .set(data[i]).then(result => {
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


    for (i = 0; i < barry.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: barry[i].content,
                date: barry[i].date,
                id: "episode-0" + (i + 1),
                image: barry[i].image,
                name: barry[i].name
            }
        }
        else {
            temp = {
                content: barry[i].content,
                date: "1998",
                id: "episode-" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FGTO%2Fgto.jpg?alt=media&token=6f85b484-7f8a-408c-b24e-99136cfe9a2a",
                name: barry[i].name
            }
        }
        db.collection("Content").doc("tvftripling").collection("Season-1").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })
    }



}



