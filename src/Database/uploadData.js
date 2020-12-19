import { db } from "../firebase";
import getSubCollection from "./getSubCollection";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "thjudge",
            name: "The Judge",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FTheJudge%2Ftj.jpg?alt=media&token=cbd0fbef-6bd0-445c-a168-bd3fcecfff9e",
            year: "2014 ",
            keywords: ["Movie", "Hollywood", "Comedy", "Drama"],
            leng: "2h 22m",
            rate: "0",
            season: 0,
            description: "Years after he returns to his hometown, Chicago-based lawyer Hank Palmer decides to fight the case for his father, Joseph, an adjudicator, who is accused of murder."
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
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E01-converted.mp4?alt=media&token=76ea55ad-0a62-408c-bd98-6d3ddbf5a827",
            name: "The Show Must Go On, Probably?",
            date: "31 Mar. 2019",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E02-converted.mp4?alt=media&token=04e216ad-5b18-46e2-8e10-35f2eae16fda",
            date: "7 Apr. 2019",
            name: "The Power of No"
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E03-converted.mp4?alt=media&token=ef9153a7-d67e-4818-9e32-7111746d20d7",
            date: "14 Apr. 2019",
            name: "Past = Present x Future Over Yesterday"
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E04-converted.mp4?alt=media&token=0b8df8cc-6736-4417-b0cb-dff2eed8e4eb",
            date: "21 Apr. 2019",
            name: "What?!"
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E05-converted.mp4?alt=media&token=68c2da23-b458-4dc9-b6bf-0c151b2a535c",
            date: "28 Apr. 2019",
            name: "ronny/lilly"
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E06-converted.mp4?alt=media&token=00a96549-d12a-4575-8fee-0010f05f0f6c",
            date: "5 May 2019",
            name: "The Truth Has a Ring to It"
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E07-converted.mp4?alt=media&token=ce54314d-bd80-415e-a398-172207aa198a",
            date: "12 May 2019",
            name: "The Audition"
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FBarry%2FS1%2FBarry%20S01E08-converted.mp4?alt=media&token=f1791494-0eec-4ae6-b07f-38e2691517bb",
            date: "19 May 2019",
            name: "berkman > block"
        }
    ]


    for (i = 0; i < data.length; i++) {
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
    }

    /*for (i = 0; i < kuroko.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: kuroko[i].content,
                date: kuroko[i].date,
                id: "episode-0" + (i + 1),
                image: "",
                name: kuroko[i].name,
            }
        }
        else {
            temp = {
                content: kuroko[i].content,
                date: kuroko[i].date,
                id: "episode-" + (i + 1),
                image: "",
                name: kuroko[i].name
            }
        }
        db.collection("Content").doc("kurokonobasket").collection("Season-1").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })

    }*/





}







