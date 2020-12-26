import { db } from "../firebase";
import getSubCollection from "./getSubCollection";
//import {getByWord} from './getCollectionQuery'

export function uploadData() {

    var i = 0;

    var data = [
        {
            id: "abouttime",
            name: "About Time",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FAboutTime%2Fabouttime.jpg?alt=media&token=5b0f1614-d5ad-411c-9a79-118710f8eca5",
            year: "2013",
            keywords: ["Movie", "Hollywood", "Romance", "Fantasy", "Margot Robbie"],
            genre: "Romance/Fantasy",
            leng: "2h 4m",
            rate: "0",
            season: 0,
            description: "Like all the men in his family, Tim Lake possesses the power to travel in time. With the advice of his father, he uses his special ability to pursue his romantic interest, Mary.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FAboutTime%2FAbout%20Time%20Official%20Trailer%20%231%20(2013)%20-%20Rachel%20McAdams%20Movie%20HD.mp4?alt=media&token=23ffe4e6-53ea-4daa-a88a-196c4af80dfa"
        },
        {
            id: "bombshell",
            name: "Bombshell",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FBomshell%2Fbomb.jpg?alt=media&token=5dfcb91b-4fe5-476e-88fc-f88cae8b4589",
            year: "2019",
            keywords: ["Movie", "Hollywood", "Drama ", "Margot Robbie", "Women Empowerment"],
            genre: "Drama",
            leng: "1h 49m",
            rate: "0",
            season: 0,
            description: "Having had enough of her boss's sexual harassments, Gretchen Carlson files a lawsuit against Fox News founder Roger Ailes. Her bravery triggers a domino effect, culminating into a liberation movement.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FBomshell%2FBombshell%20(2019%20Movie)%20Official%20Teaser%20%E2%80%94%20Charlize%20Theron%2C%20Nicole%20Kidman%2C%20Margot%20Robbie.mp4?alt=media&token=662bd89c-d355-421d-b8fe-a274f04d1cf8"
        },
        {
            id: "duedate",
            name: "Due Date",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FDueDate%2Fduedate.jpg?alt=media&token=f8d5570d-edb3-43b4-aa47-0efc2be03d9f",
            year: "2010",
            keywords: ["Movie", "Hollywood", "Comedy", "Road", "Robert Downey Jr"],
            genre: "Comedy/Road",
            leng: "1h 35m",
            rate: "0",
            season: 0,
            description: "Peter Highman must reach Los Angeles to make it in time for his child's birth. However, he is forced to travel with Ethan, an aspiring actor who frequently lands him in trouble.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FDueDate%2FDue%20Date%20Main%20Trailer.mp4?alt=media&token=7e68fe55-c376-44fb-bb8d-b0c8e3f5424a"
        },
        {
            id: "focus",
            name: "Focus",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FFocus%2Ffocus.jpg?alt=media&token=cabda461-28b2-4dd8-9a5c-a431724698dd",
            year: "2015",
            keywords: ["Movie", "Hollywood", "Romance", "Crime", "Will Smith", "Margot Robbie"],
            genre: "Romance/Crime",
            leng: "1h 45m",
            rate: "0",
            season: 0,
            description: "Nicky, an accomplished con artist, gets romantically involved with his disciple, Jess, but, soon, ends their relationship. Years later, she returns as a femme fatale to spoil his plans.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FFocus%2FFocus%20-%20Official%20Trailer%202%20%5BHD%5D.mp4?alt=media&token=2228ff69-b8d4-4be9-9797-23ecf72b3458"
        },
        {
            id: "itonya",
            name: "I, Tonya",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FITonya%2Fitonya.jpg?alt=media&token=f1d26ce8-18d2-4e7c-9408-14b26c3838f3",
            year: "2017",
            keywords: ["Movie", "Hollywood", "Sport", "Drama", "Margot Robbie"],
            genre: "Sport/Drama",
            leng: "2h 1m",
            rate: "0",
            season: 0,
            description: "In 1991, talented figure skater Tonya Harding becomes the first American woman to complete a triple axel during a competition. In 1994, her world comes crashing down when her ex-husband conspires to injure Nancy Kerrigan, a fellow Olympic hopeful, in a poorly conceived attack that forces the young woman to withdraw from the national championship. Harding's life and legacy instantly become tarnished as she's forever associated with one of the most infamous scandals in sports history.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FITonya%2FI%2C%20Tonya%20Trailer%20%231%20(2017)%20_%20Movieclips%20Trailers.mp4?alt=media&token=e962b6ca-c0b4-40e2-9774-fabc8914f841"
        },{
            id: "kisskissbangbang",
            name: "Kiss Kiss Bang Bang",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FKissKissBangBang%2Fkkbb.jpg?alt=media&token=54dfba2f-5b04-4dbb-bab6-1fdf83adc538",
            year: "2005",
            keywords: ["Movie", "Hollywood", "Mystery", "Drama", "Robert Downey Jr"],
            genre: "Mystery/Noir",
            leng: "1h 43m",
            rate: "0",
            season: 0,
            description: "A thief, pretending to be an actor, gets involved in a murder investigation in Hollywood when he befriends a private eye. He soon draws in a struggling actress in the investigation.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FKissKissBangBang%2FKiss%20Kiss%20Bang%20Bang%20(2005)%20Official%20Trailer%20-%20Robert%20Downey%20Jr.%2C%20Val%20Kilmer%20Movie%20HD.mp4?alt=media&token=44171df1-6fcd-4921-a915-7211c003a634"
        },{
            id: "onceuponatimeinhollywood",
            name: "Once Upon A Time...In Hollywood",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FOnceUponatimeinhollywood%2Fouth.jpg?alt=media&token=487d52c0-b752-4b28-a70d-74575e6ea3a4",
            year: "2019",
            keywords: ["Movie", "Hollywood", "Comedy", "Drama", "Margot Robbie", 'Brad Pitt', "Leonardo DiCaprio"],
            genre: "Comedy/Drama",
            leng: "2h 40m",
            rate: "0",
            season: 0,
            description: "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FOnceUponatimeinhollywood%2FONCE%20UPON%20A%20TIME%20IN%20HOLLYWOOD%20-%20Official%20Trailer%20(HD).mp4?alt=media&token=7faeab64-59b8-4dc6-939d-1a7f4554f92f"
        },{
            id: "sherlockholmes",
            name: "Sherlock Holmes",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FSherlockHolmes%2FSherlock_holmes_ritchie.jpg?alt=media&token=8d7b66ec-8684-4399-8f6d-f5b402b5e0e1",
            year: "2009",
            keywords: ["Movie", "Hollywood", "Mystery", "Drama", "Robert Downey Jr"],
            genre: "Mystery",
            leng: "2h 9m",
            rate: "0",
            season: 0,
            description: "Detective Sherlock Holmes and his partner, Dr Watson, send Blackwood, a serial killer, to the gallows. However, they are shocked to learn that he is back from the dead and must pursue him again.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FSherlockHolmes%2FSherlock%20Holmes%20Trailer%20%23%201.mp4?alt=media&token=5c04b80d-6310-49ca-ab17-7df308a8bef6"
        },{
            id: "thelegendoftarzan",
            name: "The Legend of Tarzan",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FTheLegendOfTarzan%2Ftlot.jpg?alt=media&token=8065ec19-fa66-4536-b074-3d4f28edcdec",
            year: "2016",
            keywords: ["Movie", "Hollywood", "Romance", "Adventure", "Margot Robbie"],
            genre: "Adventure/Romance",
            leng: "1h 50m",
            rate: "0",
            season: 0,
            description: "When Jane is abducted by the Belgian envoy Leon Rom while investigating the government's activities in the Congo, John must revert to his former self as Tarzan if he is to save his beloved wife.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FTheLegendOfTarzan%2FThe%20Legend%20of%20Tarzan%20%E2%80%93%20Official%20Trailer%20-%20Warner%20Bros.%20UK.mp4?alt=media&token=6e4c4dbe-f913-4442-8a1c-dfb376bfac7e"
        },{
            id: "wonderwoman1984",
            name: "Wonder Woman 1984",
            country: "USA",
            app: "",
            poster: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FWonderWoman84%2Fww1984.jpg?alt=media&token=0fe5b89f-ab78-4588-acd9-e6680c9a6a8c",
            year: "2020",
            keywords: ["Movie", "Hollywood", "Adventure", "Action", "Gal Gadot", "DC"],
            genre: "Adventure/Action",
            leng: "2h 35m",
            rate: "0",
            season: 0,
            description: "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s -- an era of excess driven by the pursuit of having it all. Though she's come into her full powers, she maintains a low profile by curating ancient artifacts, and only performing heroic acts incognito. But soon, Diana will have to muster all of her strength, wisdom and courage as she finds herself squaring off against Maxwell Lord and the Cheetah, a villainess who possesses superhuman strength and agility.",
            trailer:"https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Hollywood%2FMovies%2FWonderWoman84%2FWonder%20Woman%201984%20-%20Official%20Main%20Trailer.mp4?alt=media&token=f48fff49-2b96-47f8-87ca-77ef26b5782f"
        },
        
    ]

    var episodes = [
        {
            content: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2FOne%20Punch%20Man%20(Season%202)%20-%20Episode%2013%20%5BEnglish%20Sub%5D.mp4?alt=media&token=69e43188-6df0-4c71-b4d1-b923d878fa86",
            date: "Apr 10, 2019",
            name: "Return of the Hero",
        }
    ]

    const cast = [
        {
            id: "kungfupanda",
            cast: [
                {
                    actor: "Jack Black",
                    role: "Po",
                    photo: ""
                }
            ]
        },
    ]


    for (i = 0; i < data.length; i++) {
        db.collection("Content").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                keywords: data[i].genre,
                poster: data[i].poster,
                year: data[i].year,
                app: data[i].app,
                country: data[i].country,
                leng: data[i].leng,
                season: data[i].season,
                description: data[i].description,
                trailer: data[i].trailer
            }).then(result => {
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

    /*for (i = 0; i < episodes.length; i++) {
        var temp

        if (i < 9) {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-0" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2Fopmc.jpg?alt=media&token=884968e2-6e52-42a4-a206-4ae0dbd1bbe8",
                name: episodes[i].name,
            }
        }
        else {
            temp = {
                content: episodes[i].content,
                date: episodes[i].date,
                id: "episode-" + (i + 1),
                image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/Anime%2FOnePunchMan%2Fopmc.jpg?alt=media&token=884968e2-6e52-42a4-a206-4ae0dbd1bbe8",
                name: episodes[i].name
            }
        }
        db.collection("Content").doc("onepunchman").collection("Season-2").doc(temp.id).set(temp).then(r => {
            console.log("Done")
        })

    }*/

    /*getSubCollection("Content", "onepunchman", "Season-2").then(result=>{
        for(var a = 0; a < result.length; a++){
            db.collection("Anime").doc("onepunchman").collection("Season-2").doc(result[a].id).set(result[a]).then(o=>{
                console.log("Done")
            })
        }
    })*/

}







