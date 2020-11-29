import { db } from "../firebase";

export function uploadData() {

    var data = [
        {
            name: "TVF Tripling",
            year: "2016",
            keywords: "Drama",
            leng: "2 seasons",
            platform: "Web",
            industry: "Bollywood",
            genre: "Family",
            id: "tvftripling",
            country: "India",
            on:"TVF Play",
            description:"TVF Tripling is an Indian web series created by The Viral Fever. It traces the story of three siblings Chandan, Chanchal & Chitvan. Together they start a hilarious journey, to find themselves and their relations. The season 2 of the web series came out on TVF PLAY and Sony Liv on 5 April 2019",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Bollywood%2FWeb%2Ftvftripplingseason1%2FTVF%20Tripling%20Season%202%20_%20Official%20Trailer%20_%20All%20episodes%20streaming%20April%205th%20on%20TVFPLAY%20%26%20SONYLIV.mp4?alt=media&token=6d0cf995-3345-4940-9c29-2b295adf6f29",
            poster:"https://pbs.twimg.com/media/D3XbccgXsAAcB9s.jpg"
        },
    ]

    var i = 0;

    for (i; i < data.length; i++) {

        db.collection(data[i].industry).doc(data[i].platform).collection(data[i].genre).doc(data[i].id)
        .set(data[i]).then(result => {
            console.log(" Done")
        }).catch(error => {
            console.log(error)
        })
    }


}