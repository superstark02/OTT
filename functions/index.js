const express = require('express');
const cors = require('cors');
const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const bodyParser = require("body-parser");

const app = express();

firebase.initializeApp(functions.config().firebase);
var db = firebase.firestore();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(4000, () => { console.log("Listening at " + 4000) })

app.get('/', (req, res) => {
    var data = []
    getCollectionQuery("Index", ["Comedy", "Series"]).then(snap => {
        data.push(shuffleArray(snap))
        getCollectionQuery("Index", ["Action", "Movie"]).then(sna => {
            data.push(shuffleArray(sna))
            getCollectionQuery("Index", ["Drama", "Series"]).then(sn => {
                data.push(shuffleArray(sn))
                getCollectionQuery("Index", ['Animated', "Movie"]).then(s => {
                    data.push(shuffleArray(s))
                    getCollectionQuery("Index", ['Adventure', "Movie"]).then(s_ => {
                        data.push(shuffleArray(s_))
                        res.send(data)
                        return null
                    })
                })
            })
        })
    }).catch(e => {
        console.log(e)
    })
});

app.post('/get-doc', (req, res) => {

    if (req.body.name && req.body.doc_name) {
        getDoc(req.body.name, req.body.doc_name).then(result => {
            res.send(result)
            return "null"
        }).catch(e => {
            return e
        })
    }
    return null
})

app.post('/get-episode', (req, res) => {

    if (req.body.id && req.body.season && req.body.episode) {
        getEpisode(req.body.id, req.body.season, req.body.episode).then(snap => {
            res.send(snap)
            return "null"
        }).catch(e => {
            return e
        })
    }
    return null
})

app.post('/get-time', (req, res) => {
    if (req.body.uid) {
        getTime(req.body.id, req.body.season, req.body.episode, req.body.uid).then(time => {
            if (time) {
                res.send(time)
            }
            return "null"
        }).catch(e => {
            return e
        })
    } else {
        res.send(null)
    }
})

app.post('/continue-watching', (req, res) => {
    var list = []
    var store = []
    if (req.body.uid) {
        getWatching("Users", req.body.uid, "Watching").then(snap=>{
            store.push(snap.length)
            for(var i = 0; i < snap.length ; i++){
                getDoc("Index", snap[i].id).then(sna=>{
                    list.push({
                        poster: sna.poster,
                        id: snap[i].id,
                        season: snap[i].season,
                        episode: snap[i].episode
                    });
                    if(list.length === store[0]){
                        res.send(list)
                    }
                })
            }
        }).catch(e=>{
            console.log(e)
        })
    } else {
        res.send(null)
    }
})

app.post('/add-watching', (req, res) => {
    if (req.body.uid) {
        addSubDoc("Users", req.body.uid, "Watching", req.body.series_id, {
            id: req.body.series_id,
            episode: req.body.episode,
            season: req.body.season,
            date: Date.now()
        })
    } else {
        res.send(null)
    }
})

exports.widgets = functions.https.onRequest(app);




function getWatching(collection , doc, sub_collection){
    return new Promise((resolve, reject) => {
        var data = [];
        db.collection(collection).doc(doc).collection(sub_collection).orderBy("date")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    data.push(doc.data())
                });
                resolve(data);
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

function getDoc(name, doc_name) {

    return new Promise((resolve, reject) => {

        db.collection(name).doc(doc_name)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    resolve("Empty")
                }
                return "null"
            })
            .catch(reason => {
                reject(reason);
                return reason
            });
    });
}

function getEpisode(id, season, episode) {
    return new Promise((resolve, reject) => {
        db.collection("Content").doc(id).collection(season).doc(episode)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    resolve("Empty")
                }
                return null
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

function getCollectionQuery(name, filter) {
    return new Promise((resolve, reject) => {
        var data = [];
        const collection = db.collection(name);
        collection.get().then(snapshot => {
            if (snapshot.empty) {
                reject(new Error("Empty"))
            }
            else {
                snapshot.forEach(doc => {
                    if (search(doc.data().keywords, filter[0]) && search(doc.data().keywords, filter[1])) {
                        if (notAnime(doc.data().keywords)) {
                            data.push(doc.data())
                        }
                    }
                });
                resolve(data)
            }
            return "null"
        }).catch(e => {
            reject(e)
        })
    });
}

function addSubDoc(collection,doc,sub_collection,sub_doc,data){

    return new Promise((resolve, reject) => {

        db.collection(collection).doc(doc).collection(sub_collection).doc(sub_doc).set(data).then(result=>{
            resolve(1);
        }).catch(error=>{
            reject(error)
        })
    });
}

function getTime(searies_id, season, episode, uid) {
    return new Promise((resolve, reject) => {
        db.collection("Users").doc(uid).collection("Times").doc(searies_id + "-" + season + "-" + episode)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve(snapshot.data());
                }
                else {
                    resolve("Empty")
                }

                return "null"
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

function search(array, filter) {
    for (var k = 0; k < array.length; k++) {
        if (array[k] === filter) {
            return true
        }
    }
    return false
}

function notAnime(array) {
    for (var k = 0; k < array.length; k++) {
        if (array[k] === "Anime") {
            return false
        }
    }
    return true
}