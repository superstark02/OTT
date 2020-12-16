import { db } from "../firebase";

export function uploadData() {

    var i = 0;

    var data = [
        {
            id:"drstone",
            name:"Dr. Stone",
            country:"Japan",
            app:"",
            poster:"https://cdn.myanimelist.net/images/anime/1613/102576.jpg",
            year:"2017",
            keywords:["Anime", "Comedy", "Fiction", "Shounen"],
            leng:"1 Season",
            rate:"0",
            season: 1,
            description:"After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone.Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuus brain's combine to forge a formidable partnership, and they soon uncover a method to revive those petrified."
        },
        {
            id:"sacredgames",
            name:"Sacred Games",
            country:"India",
            app:"Netflix",
            poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpa7P87YXksOMkrqn7xPnxEnQrLZsnvCjhLXJW-wmwKiG4HVqi",
            year:"2017",
            keywords:["Drama", "Thriller", "18+", "Foul Language"],
            leng:"2 Seasons",
            rate:"0",
            season: 2,
            description:"When police officer Sartaj Singh receives an anonymous tip about the location of criminal overlord Ganesh Gaitonde, he embarks on a chase around Mumbai in what becomes a dangerous cat-and-mouse game. Amidst the chaos, trappings of a corrupt underworld are revealed. After being removed from the Gaitonde case, Singh begins his own investigation as he works to save Mumbai from impending doom. Flashbacks reveal some of the crimes that Gaitonde has committed through the years."
        }
    ]

    var episodes = [
        {
            content:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FStrangerThings%2FS2%2FStranger.Things.S02E01.Chapter.One.MADMAX.1080p.NF.WEBRip.5.1.HEVC.x265-GIRAYS-converted.mp4?alt=media&token=bc8acc35-4c73-416d-b72c-11877119d1fc",
            image:"",
            name:"MadMax"
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

            /*for(i = 0; i < episodes.length ; i++){

                var temp 

                if(i<10){
                    temp = {
                        content: episodes[i].content,
                        date:"October 27, 2017",
                        id:"episode-0"+(i+1),
                        image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FStrangerThings%2Fstcover.png?alt=media&token=76fa503c-612a-4be9-a715-9b079649a47e",
                        name: episodes[i].name
                    }
                }
                else{
                    temp = {
                        content: episodes[i].content,
                        date:"October 27, 2017",
                        id:"episode-"+(i+1),
                        image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FTV%2FStrangerThings%2Fstcover.png?alt=media&token=76fa503c-612a-4be9-a715-9b079649a47e",
                        name: episodes[i].name
                    }
                }
                

                db.collection("Content").doc("strangerthings").collection("Season-2").doc(temp.id).set(temp).then(r=>{
                    console.log("Done")
                })
            }*/
        
    //}


}