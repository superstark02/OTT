import { db } from "../firebase";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id:"",
            name:"",
            country:"",
            app:"",
            poster:"",
            year:"2006",
            keywords:[],
            leng:"",
            rate:"0",
            season: 1,
            description:""
        }
    ]

    var episodes = [
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%201-converted.mp4?alt=media&token=d64efea1-4ebf-4e32-9834-c8f91a9ff706",
            image:"",
            name:"Rebirth"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%202-converted.mp4?alt=media&token=c429bbd1-6fb7-458a-994e-41f5c55f1980",
            image:"",
            name:"Confrontation"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%203-converted.mp4?alt=media&token=e5720301-5a77-4574-a951-fa6ac76b3848",
            image:"",
            name:"The Deal"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%204-converted.mp4?alt=media&token=4d69ca79-6bc7-46f5-87a0-aff98f4cf00d",
            image:"",
            name:"Pursuit"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%205-converted.mp4?alt=media&token=322c5a33-de90-4063-a0e0-cc0f4eb0c07f",
            image:"",
            name:"Tactics"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%206-converted.mp4?alt=media&token=fab4fa9d-92f6-4bfa-9ff4-addbce553273",
            image:"",
            name:"Unraveling"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%207-converted.mp4?alt=media&token=2ea3edc7-f190-469a-ab6f-32ddf8ab4bec",
            image:"",
            name:"Overcast"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%208-converted.mp4?alt=media&token=e8f86582-ac97-4ccb-8962-659b7592b1ab",
            image:"",
            name:"Glare"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%209-converted.mp4?alt=media&token=6f6695fc-9843-4d57-abf4-d3d653a085c5",
            image:"",
            name:"Encounter"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2010-converted.mp4?alt=media&token=06cff457-1f3d-485b-a129-f93f8a73b104",
            image:"",
            name:"Doubt"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2011-converted.mp4?alt=media&token=14d6bcb9-f3ba-46b1-a656-3393f6bb354a",
            image:"",
            name:"Assault"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2012-converted.mp4?alt=media&token=6cbaf49f-1a7e-499a-a2e7-4959a9890eff",
            image:"",
            name:"Love"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2013-converted.mp4?alt=media&token=b4252387-2cbb-4ee3-abfe-c1eba819813e",
            image:"",
            name:"Confession"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2014-converted.mp4?alt=media&token=65d2e236-1d03-49a7-b6d7-bb8ee604d5b3",
            image:"",
            name:"Friend"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2015-converted.mp4?alt=media&token=f96d1d99-9958-402e-a68c-b3130a9a8c16",
            image:"",
            name:"Wager"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2016-converted.mp4?alt=media&token=7eda3356-2703-45f4-8a77-7e69f92e4fcf",
            image:"",
            name:"Decision"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2017-converted.mp4?alt=media&token=3ac2c063-0fe9-4283-9dfa-8bbe40a9bc56",
            image:"",
            name:"Execution"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2018-converted.mp4?alt=media&token=ec535ef7-9108-49a0-8752-06ef9a6ff282",
            image:"",
            name:"Ally"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2019-converted.mp4?alt=media&token=3330e491-7cbf-43e1-989d-20dbaee39685",
            image:"",
            name:"Matsuda"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2020-converted.mp4?alt=media&token=b9e848bc-addc-411a-b41e-e30846c03ee5",
            image:"",
            name:"Makeshift"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2021-converted.mp4?alt=media&token=16c5c230-5491-42e5-b853-e3d28a1ea385",
            image:"",
            name:"Performance"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2022-converted.mp4?alt=media&token=d6c1f8b8-7ed2-4c83-a61d-c3cd243a4efd",
            image:"",
            name:"Guidance"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2023-converted.mp4?alt=media&token=a916014f-a89b-409b-9636-7c460eb1dc1e",
            image:"",
            name:"Frenzy"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2024-converted.mp4?alt=media&token=9ea22918-3614-4d3d-a7ff-2b4ebc383b8d",
            image:"",
            name:"Revival"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2025-converted.mp4?alt=media&token=801a73b3-bb49-464b-998d-defe4b7c1bf1",
            image:"",
            name:"Silence"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2026-converted.mp4?alt=media&token=679d4804-9c1f-444c-8bcd-da8402522340",
            image:"",
            name:"Renewal"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2027-converted.mp4?alt=media&token=7be4cfba-4a1c-4e90-9910-ec376f26111d",
            image:"",
            name:"Abduction"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2028-converted.mp4?alt=media&token=a319697b-15ce-454f-baac-3dd2a1db7f61",
            image:"",
            name:"Impatience"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2029-converted.mp4?alt=media&token=ae08a8d5-4223-4306-857c-ca1a0580a832",
            image:"",
            name:"Father"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2030-converted.mp4?alt=media&token=5986e3fd-8d3c-4e30-ae0b-00736175daf3",
            image:"",
            name:"Justice"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2031-converted.mp4?alt=media&token=23965034-71ec-4596-954d-2378148d5646",
            image:"",
            name:"Transfer"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2032-converted.mp4?alt=media&token=80ebcfcd-e160-4cad-bf01-7cad1ebbead7",
            image:"",
            name:"Selection"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2033-converted.mp4?alt=media&token=df185691-6e58-4907-820f-8ff3cd8efaa6",
            image:"",
            name:"Scorn"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2034-converted.mp4?alt=media&token=b55971ce-caf4-4107-a47d-c6b59055781c",
            image:"",
            name:"Vigilance"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2035-converted.mp4?alt=media&token=7ab68469-0781-43d6-8c21-af15339b6cf6",
            image:"",
            name:"Malice"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2036-converted.mp4?alt=media&token=3026b8e6-d777-4a1b-bd8b-4eca07cdfcd0",
            image:"",
            name:"1.28"
        },
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FDeathNote%2FDeath%20note%20-%20EP%2037-converted.mp4?alt=media&token=9e79d323-e030-42b5-88b2-1a968d5ef179",
            image:"",
            name:"New World"
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

            /*
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
            }*/

            for(i = 0; i < episodes.length ; i++){

                var temp 

                if(i<10){
                    temp = {
                        content: episodes[i].content,
                        date:"3 October, 2006",
                        id:"episode-0"+(i+1),
                        image: "https://i.pinimg.com/474x/74/ca/f5/74caf5b5b44853684277e2ddc5509f7e.jpg",
                        name: episodes[i].name
                    }
                }
                else{
                    temp = {
                        content: episodes[i].content,
                        date:"3 October, 2006",
                        id:"episode-"+(i+1),
                        image: "https://i.pinimg.com/474x/74/ca/f5/74caf5b5b44853684277e2ddc5509f7e.jpg",
                        name: episodes[i].name
                    }
                }
                

                db.collection("Content").doc("deathnote").collection("Season-1").doc(temp.id).set(temp).then(r=>{
                    console.log("Done")
                })
            }
        
    //}


}