import { db } from "../firebase";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id:"deathnote",
            name:"Death Note",
            country:"Japan",
            app:"",
            poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbBAVvPYT50Isa3xKRTi9J3BVH20H6qPOk2Hd_CzX2Wwfx7eEo",
            year:"2006",
            keywords:["Anime", "Mystery", "Thriller", "Crime", "Psycology", "Series"],
            leng:"1 season",
            rate:"0",
            season: 1,
            description:"A high school student discovers a supernatural notebook that grants its user the ability to kill."
        },
        {
            id:"onepunchman",
            name:"One Punch Man",
            country:"Japan",
            app:"",
            poster:"https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
            year:"2015",
            keywords:["Anime", "Action", "Shounen", "Comedy", "Series" ],
            leng:"2 seasons",
            rate:"0",
            season: 2,
            description:"One-Punch Man is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy foe after growing bored by a lack of challenge due to his overwhelming strength."
        },
        {
            id:"greatteacheronizuka",
            name:"Great Teacher Onizuka",
            country:"Japan",
            app:"",
            poster:"https://m.media-amazon.com/images/M/MV5BNzZmYjBjMGYtNzk1Zi00MzZiLWI1MzgtNGYwZTZhMTRhNjMzXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg",
            year:"",
            keywords:["Anime", "Slice Of Life", "Comedy", "Series" ],
            leng:"1 season",
            rate:"0",
            season: 1,
            description:"Twenty-two-year-old Eikichi Onizuka—ex-biker gang leader, conqueror of Shonan, and virgin—has a dream: to become the greatest high school teacher in all of Japan. This isn't because of a passion for teaching, but because he wants a loving teenage wife when he's old and gray. Still, for a perverted, greedy, and lazy delinquent, there is more to Onizuka than meets the eye. So when he lands a job as the homeroom teacher of the Class 3-4 at the prestigious Holy Forest Academy—despite suplexing the Vice Principal—all of his talents are put to the test, as this class is particularly infamous."
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