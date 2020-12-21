import { db } from "../firebase";
import getSubCollection from "./getSubCollection";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "thewolfofwallstreet",
            name: "The Wolf of Wall Street",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FTheWolfOfWallStreet%2Ftwows.jpg?alt=media&token=c7e1e81d-9ec5-47de-a518-c19dfb5c7194",
            year: "2013",
            keywords: ["Movie", "Hollywood", "Comedy", "Drama"],
            leng: "3h",
            rate: "0",
            season: 0,
            description: "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide."
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

    const cast = [
        {
            id: "kungfupanda",
            cast: [
                {
                    actor: "Jack Black",
                    role: "Po",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FJackBlack.jpg?alt=media&token=25c7277f-cbed-4c4e-b08e-04c3c16b767e"
                },
                {
                    actor: "Angelina Jolie",
                    role: "Tigress",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FAngelina_Jolie.jpg?alt=media&token=987239f6-01d0-4195-baea-db2bde6befb9"
                },
                {
                    actor: "Gary Oldman",
                    role: "Lord Shen",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FGaryOldman.jpg?alt=media&token=052421a0-d9c8-4ea8-83ee-ab9eadbf7308"
                },
                {
                    actor: "Dustin Hoffman",
                    role: "Master Shifu",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FDustinHoffman.jpg?alt=media&token=3f6008db-a14a-4c28-a652-299338dd6ed4"
                },
                {
                    actor: "Jackie Chan",
                    role: "Monkey",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2Fjackie-chan.jpg?alt=media&token=e1f41f2b-93b6-4f75-ab9b-f0a4a17016b8"
                },
            ]
        },
        {
            id: "kungfupanda2",
            cast: [
                {
                    actor: "Jack Black",
                    role: "Po",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FJackBlack.jpg?alt=media&token=25c7277f-cbed-4c4e-b08e-04c3c16b767e"
                },
                {
                    actor: "Angelina Jolie",
                    role: "Tigress",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FAngelina_Jolie.jpg?alt=media&token=987239f6-01d0-4195-baea-db2bde6befb9"
                },
                {
                    actor: "Gary Oldman",
                    role: "Lord Shen",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FGaryOldman.jpg?alt=media&token=052421a0-d9c8-4ea8-83ee-ab9eadbf7308"
                },
                {
                    actor: "Dustin Hoffman",
                    role: "Master Shifu",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FDustinHoffman.jpg?alt=media&token=3f6008db-a14a-4c28-a652-299338dd6ed4"
                },
                {
                    actor: "Jackie Chan",
                    role: "Monkey",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2Fjackie-chan.jpg?alt=media&token=e1f41f2b-93b6-4f75-ab9b-f0a4a17016b8"
                },
            ]
        },
        {
            id: "kungfupanda3",
            cast: [
                {
                    actor: "Jack Black",
                    role: "Po",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FJackBlack.jpg?alt=media&token=25c7277f-cbed-4c4e-b08e-04c3c16b767e"
                },
                {
                    actor: "Angelina Jolie",
                    role: "Tigress",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FAngelina_Jolie.jpg?alt=media&token=987239f6-01d0-4195-baea-db2bde6befb9"
                },
                {
                    actor: "Gary Oldman",
                    role: "Lord Shen",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FGaryOldman.jpg?alt=media&token=052421a0-d9c8-4ea8-83ee-ab9eadbf7308"
                },
                {
                    actor: "Dustin Hoffman",
                    role: "Master Shifu",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FDustinHoffman.jpg?alt=media&token=3f6008db-a14a-4c28-a652-299338dd6ed4"
                },
                {
                    actor: "Jackie Chan",
                    role: "Monkey",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2Fjackie-chan.jpg?alt=media&token=e1f41f2b-93b6-4f75-ab9b-f0a4a17016b8"
                },
            ]
        },
        {
            id: "Journeythemysteriousisland",
            cast: [
                {
                    actor: "Josh Hutcherson",
                    role: "Sean Anderson",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2Fjosh%20hutcherson.jpg?alt=media&token=4c0a588a-669c-4493-a93e-be436f2e4559"
                },
                {
                    actor: "Dwayne Johnson",
                    role: "Hank Parsons",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FDJ.jpg?alt=media&token=b886c0b3-a866-4236-9781-0f23877bbed9"
                },
                {
                    actor: "Vanessa Hudgens",
                    role: "Kailani",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FVanessa_Hudgens.jpg?alt=media&token=c0c0f5bb-037f-40a4-b855-23a6ce345502"
                },
                {
                    actor: "Michael Caine",
                    role: "Alexander Anderson",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FSir_Michael_Caine.jpg?alt=media&token=2833589c-235c-4ef7-af86-4f553cafa1e4"
                },
                {
                    actor: "Luis Guzmán",
                    role: "Gabato",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FLuisGuzman.jpg?alt=media&token=eb280591-1ee1-41a5-8c07-7c42162775a0"
                },
            ]
        },
        {
            id: "thehobbitanunexpectedjourney",
            cast: [
                {
                    actor: "Ian McKellen",
                    role: "Gandalf",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FIanMcKellen.jpg?alt=media&token=2f30e654-a7d2-4e0e-a00c-e7c865c3a53a"
                },
                {
                    actor: "Martin Freeman",
                    role: "Bilbo",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FMartinFreeman.jpg?alt=media&token=c30b9969-4c55-4b33-91fc-c8ee0f179798"
                },
                {
                    actor: "Richard Armitage",
                    role: "	Thorin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FRichardArmitage.jpg?alt=media&token=d964e8a9-568c-4313-a018-533a9d2b7115"
                },
                {
                    actor: "Ken Stott",
                    role: "	Balin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FKenStott.jpg?alt=media&token=7309f152-99dd-4511-a98e-b7beb01e88b8"
                },
                {
                    actor: "Graham McTavish",
                    role: "Dwalin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FGrahamMcTavish.jpg?alt=media&token=abc0c459-b770-4a89-913e-9fbd3923bbed"
                },
            ]
        },
        {
            id: "thehobbitthebattleofthefivearmies",
            cast: [
                {
                    actor: "Ian McKellen",
                    role: "Gandalf",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FIanMcKellen.jpg?alt=media&token=2f30e654-a7d2-4e0e-a00c-e7c865c3a53a"
                },
                {
                    actor: "Martin Freeman",
                    role: "Bilbo",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FMartinFreeman.jpg?alt=media&token=c30b9969-4c55-4b33-91fc-c8ee0f179798"
                },
                {
                    actor: "Richard Armitage",
                    role: "	Thorin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FRichardArmitage.jpg?alt=media&token=d964e8a9-568c-4313-a018-533a9d2b7115"
                },
                {
                    actor: "Ken Stott",
                    role: "	Balin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FKenStott.jpg?alt=media&token=7309f152-99dd-4511-a98e-b7beb01e88b8"
                },
                {
                    actor: "Graham McTavish",
                    role: "Dwalin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FGrahamMcTavish.jpg?alt=media&token=abc0c459-b770-4a89-913e-9fbd3923bbed"
                },
            ]
        },
        {
            id: "thehobbitthedesolationofsmaug",
            cast: [
                {
                    actor: "Ian McKellen",
                    role: "Gandalf",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FIanMcKellen.jpg?alt=media&token=2f30e654-a7d2-4e0e-a00c-e7c865c3a53a"
                },
                {
                    actor: "Martin Freeman",
                    role: "Bilbo",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FMartinFreeman.jpg?alt=media&token=c30b9969-4c55-4b33-91fc-c8ee0f179798"
                },
                {
                    actor: "Richard Armitage",
                    role: "	Thorin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FRichardArmitage.jpg?alt=media&token=d964e8a9-568c-4313-a018-533a9d2b7115"
                },
                {
                    actor: "Ken Stott",
                    role: "	Balin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FKenStott.jpg?alt=media&token=7309f152-99dd-4511-a98e-b7beb01e88b8"
                },
                {
                    actor: "Graham McTavish",
                    role: "Dwalin",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FGrahamMcTavish.jpg?alt=media&token=abc0c459-b770-4a89-913e-9fbd3923bbed"
                },
            ]
        },
        {
            id: "thesecretlifeofpets",
            cast: [
                {
                    actor: "Kevin Hart",
                    role: "Snowball",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FKevinHart.jpg?alt=media&token=524341d9-7945-4adc-96ef-c75af9e58674"
                },
                {
                    actor: "Patton Oswalt",
                    role: "Max, Max",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2Fpattonoswalt.jpg?alt=media&token=4208dc4d-33b1-4270-9b09-0ff414e008ec"
                },
                {
                    actor: "Tiffany Haddish",
                    role: "Daisy",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FTiffanyHaddish.jpg?alt=media&token=fb7ddb80-e3f1-4fe9-bd92-ea058c652945"
                },
                {
                    actor: "Eric Stonestreet",
                    role: "Duke",
                    photo: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FCasts%2FEricStonestreet.jpg?alt=media&token=16be2b2d-f9b8-4b2d-ba1b-01b5b988cb6d"
                }
            ]
        }
    ]


    for (i = 0; i < cast.length; i++) {
        db.collection("Content").doc(cast[i].id)
            .update({
                cast: cast[i].cast
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

    /*for (i = 0; i < data.length; i++) {
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







