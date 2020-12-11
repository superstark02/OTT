import { db } from "../firebase";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id:"strangerthings",
            name:"Stranger Things",
            country:"USA",
            app:"Netflix",
            poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
            year:"2016",
            keywords:["Horror", "Hollywood", "Drama", "Series" ],
            leng:"3 seasons",
            rate:"0",
            season: 3,
            description:"This thrilling Netflix original drama stars Golden Globe-winning actress Winona Ryder as Joyce Byers, who lives in a small Indiana town in 1983 -- inspired by a time when tales of science fiction captivated audiences. When Joyce's 12-year-old son, Will, goes missing, she launches a terrifying investigation into his disappearance with local authorities. As they search for answers, they unravel a series of extraordinary mysteries involving secret government experiments, unnerving supernatural forces, and a very unusual little girl."
        },
        {
            id:"boJackhorseman",
            name:"BoJack Horseman",
            country:"USA",
            app:"Netflix",
            poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ntIAH4kgUFNe8ar6QZLfuEOqMH9SnmwSwBu_hdkK2MATd4uT",
            year:"2014",
            keywords:["Animation", "Comedy", "Series" ],
            leng:"6 seasons",
            rate:"0",
            season: 6,
            description:"A humanoid horse, BoJack Horseman -- lost in a sea of self-loathing and booze -- decides it's time for a comeback. Once the star of a '90s sitcom, in which he was the adoptive father of three orphaned kids (two girls and a boy). The show was the hottest thing around, then suddenly, was canceled. Now 18 years later, BoJack wants to regain his dignity. With the aid of a human sidekick and a feline ex-girlfriend who is his agent, he sets out to make it happen. But Hollywood is vastly different from those days, and getting used to stuff like Twitter may take some time. This first animated series from Netflix -- with plenty of references to sex, drugs and alcohol -- is not for the little ones."
        },
        {
            id:"ozark",
            name:"Ozark",
            country:"USA",
            app:"Netflix",
            poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbOV027cTJsx6Vl3JYv_CMuMFr502l7zMZ4pCkhOGC64WAohfX",
            year:"2017",
            keywords:["Crime", "Drama", "Series" ],
            leng:"3 seasons",
            rate:"0",
            season: 3,
            description:"Created by Bill Dubuque (The Accountant, The Judge), this drama series stars Jason Bateman as Marty Byrde, a financial planner who relocates his family from Chicago to a summer resort community in the Ozarks. With wife Wendy and their two kids in tow, Marty is on the move after a money-laundering scheme goes wrong, forcing him to pay off a substantial debt to a Mexican drug lord in order to keep his family safe. While the Byrdes' fate hangs in the balance, the dire circumstances force the fractured family to reconnect."
        },
        {
            id:"barry",
            name:"Barry",
            country:"USA",
            app:"Dinsney+Hotstar",
            poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXae9x5wwyckaAH6rnyC4PQVoT7Ja-nXvYfKbDgwKUH5Py9S4g",
            year:"2018",
            keywords:["Crime", "Comedy", "Series" ],
            leng:"2 seasons",
            rate:"0",
            season: 2,
            description:"Barry, who kills to earn a living, discovers the joy of acting while he is looking for his target. Surprisingly, he loves it so much that he is ready to leave his old life behind."
        },
        {
            id:"siliconvalley",
            name:"Silicon Valley",
            country:"USA",
            app:"Dinsney+Hotstar",
            poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUcIP4OB7aPVFeFZnF0qjEyYHvnOHKAok3Ml76d8NhMaOYyDAA",
            year:"2014",
            keywords:["Comedy", "Series" ],
            leng:"6 seasons",
            rate:"0",
            season: 6,
            description:"Richard, a programmer, creates an app called the Pied Piper and tries to get investors for it. Meanwhile, five other programmers struggle to make their mark in Silicon Valley."
        }
    ]

    /*getCollection("Content").then(snap=>{

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
    })*/

    

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

        

    //}


}