import { db } from "../firebase";
import getSubCollection from "./getSubCollection";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "kurokonobasket",
            name: "Kuroko No Basket",
            country: "Japan",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2Fknb.jpg?alt=media&token=01175ae6-13f2-498d-b8ce-d8c26047390a",
            year: "2012",
            keywords: ["Anime", "Comedy", "Sports", "Shounen", "Basketball"],
            leng: "3 Seasons",
            rate: "0",
            season: 3,
            description: "At Seirin High School, two newly recruited freshmen prove that they are not ordinary basketball players: Taiga Kagami, a promising player returning from the US, and Tetsuya Kuroko, a seemingly ordinary student whose lack of presence allows him to move around unnoticed. Although Kuroko is neither athletic nor able to score any points, he was a member of Teikou's basketball team, where he played as the Phantom Sixth Man, who easily passed the ball and assisted his teammates."
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

    var kuroko = [
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2001%20%5B480p%5D-converted.mp4?alt=media&token=cf88885b-b461-40fe-8cc7-6c284ca7bd20",
            date: "Apr 07, 2012",
            name: "I'm Kuroko",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2002%20%5B480p%5D-converted.mp4?alt=media&token=a695e824-bb4f-405d-8428-2301247268b7",
            date: "Apr 14, 2012",
            name: "I'm Serious",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2003%20%5B480p%5D-converted.mp4?alt=media&token=749a6ad2-45ec-426d-b0bf-7dab7bee906d",
            date: "Apr 22, 2012",
            name: "It's Better if I Can't Win",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2004%20%5B480p%5D-converted.mp4?alt=media&token=dc66d279-87ab-45df-82e0-cf8c5be66c9c",
            date: "Apr 28, 2012",
            name: "Take Care of the Counterattack!",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2005%20%5B480p%5D-converted.mp4?alt=media&token=5f2cdd3d-5c07-4949-ba04-29622ce70d9a",
            date: "May 05, 2012",
            name: "Your Basketball",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2006%20%5B480p%5D-converted.mp4?alt=media&token=98d98f0f-b9be-4bba-a9ce-517fd2d2919c",
            date: "May 13, 2012",
            name: "Let Me Tell You Two Things",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2007%20%5B480p%5D-converted.mp4?alt=media&token=18fa4832-e17e-4355-91f6-47d279800030",
            date: "May 20, 2012",
            name: "You'll See Something Amazing",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2008%20%5B480p%5D-converted.mp4?alt=media&token=8799c4ae-e2ca-4898-b89c-e0e0d60ec9ea",
            date: "May 26, 2012",
            name: "Now That I Think About It",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2009%20%5B480p%5D-converted.mp4?alt=media&token=6736ee44-a4c9-44a5-9c3d-d4ae5ea4a5b1",
            date: "Jun 02, 2012",
            name: "	To Win",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2010%20%5B480p%5D-converted.mp4?alt=media&token=513d6a0c-e026-48ca-ae2b-45769b5d725c",
            date: "Jun 09, 2012",
            name: "I Can't Have That",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2011%20%5B480p%5D-converted.mp4?alt=media&token=93c34d4e-3f86-466e-8791-db229b2350fe",
            date: "Jun 16, 2012",
            name: "It's Not Like That",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2012%20%5B480p%5D-converted.mp4?alt=media&token=c56a55bd-8874-46aa-aa25-cce3adfbc0bc",
            date: "Jun 23, 2012",
            name: "What Is",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2013%20%5B480p%5D-converted.mp4?alt=media&token=f5fc04ee-8715-416b-86f3-6cd4309ff1b4",
            date: "Jun 30, 2012",
            name: "I Believed In You",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2014%20%5B480p%5D-converted.mp4?alt=media&token=a984ec71-b6fa-43ac-b770-5e8d8d2a965a",
            date: "Jul 07, 2012",
            name: "You Look Just Like Him",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2015%20%5B480p%5D-converted.mp4?alt=media&token=9df73cf0-a9ac-4fd1-98ff-0a762f56513f",
            date: "Jul 14, 2012",
            name: "Don't Make Me Laugh",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2016%20%5B480p%5D-converted.mp4?alt=media&token=677fe0c3-cb4f-494a-8faf-934b77f81532",
            date: "Jul 22, 2012",
            name: "Let's Go",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2017%20%5B480p%5D-converted.mp4?alt=media&token=6855e3d9-e071-48ce-a147-089c3324aa78",
            date: "Jul 29, 2012",
            name: "You're All Ridiculous",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2018%20%5B480p%5D-converted.mp4?alt=media&token=23b3bffd-3d78-47f7-9bc9-7e4707592967",
            date: "Aug 05, 2012",
            name: "No!!",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2019%20%5B480p%5D-converted.mp4?alt=media&token=d9497bc4-a5da-48e3-92ea-5ddd20d5d6ef",
            date: "Aug 14, 2012",
            name: "On to a New Challenge",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2020%20%5B480p%5D-converted.mp4?alt=media&token=cfa63295-9983-40a0-8472-1bb6a7884d9f",
            date: "Aug 19, 2012",
            name: "I Don't Want to Be",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2021%20%5B480p%5D-converted.mp4?alt=media&token=de9bc626-3ae7-4e30-9926-9ccd7a4b68b4",
            date: "Aug 26, 2012",
            name: "Let's Get Started",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2022%20%5B480p%5D-converted.mp4?alt=media&token=b683e280-45e4-4a6f-b5b2-a97097dd43c6",
            date: "Sep 02, 2012",
            name: "I'll Win Even If It Kills Me",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2023%20%5B480p%5D-converted.mp4?alt=media&token=31f98868-f9fd-4a4e-99d9-2115a138cb94",
            date: "Sep 08, 2012",
            name: "Not An Adult!",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2024%20%5B480p%5D-converted.mp4?alt=media&token=4115b301-4bce-402e-af9b-d5b6fec435c1",
            date: "Sep 16, 2012",
            name: "Don't Get the Wrong Idea",
        },
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2FS1%2FKuroko%20no%20Basket%20-%2025%20%5B480p%5D-converted.mp4?alt=media&token=f9deb832-8aa4-41c4-beb3-236c6d6a00a4",
            date: "Sep 23, 2012",
            name: "Our Basketball",
        },
    ]

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

    for (i = 0; i < kuroko.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: kuroko[i].content,
                date: kuroko[i].date,
                id: "episode-0" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2Fknbp.jpg?alt=media&token=801df72c-9956-4090-b0f9-fb51bce9c110",
                name: kuroko[i].name,
            }
        }
        else {
            temp = {
                content: kuroko[i].content,
                date: kuroko[i].date,
                id: "episode-" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FKurokuNoBasket%2Fknbp.jpg?alt=media&token=801df72c-9956-4090-b0f9-fb51bce9c110",
                name: kuroko[i].name
            }
        }
        db.collection("Content").doc("kurokonobasket").collection("Season-1").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })

    }





}







