import { db } from "../firebase";

export function uploadData() {

    var data = [
        {
            name: "Extraction",
            year: "2020",
            keywords: "Action/Thriller",
            leng: "1h 57m",
            platform: "Movie",
            industry: "Hollywood",
            genre: "Family",
            id: "extraction",
            country: "USA",
            on:"Netflix",
            description:"A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FExtraction%2FExtraction%20_%20Official%20Trailer%20_%20Screenplay%20by%20JOE%20RUSSO%20Directed%20by%20SAM%20HARGRAVE%20_%20Netflix.mp4?alt=media&token=9ab5c396-feda-4deb-9f97-a6ece0e15cfe",
            poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRELEr5bWH1Z9ZlYjofDbRoW0ToFJop6YlcJuVU8lAYt2peph_n"
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