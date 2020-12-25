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
    getCollectionQuery("Index", ["Comedy", "Movie"]).then(snap => {
        data.push(snap)
        getCollectionQuery("Index", ["Action", "Movie"]).then(sna => {
            data.push(sna)
            getCollectionQuery("Index", ["Drama", "Movie"]).then(sn => {
                data.push(sn)
                getCollectionQuery("Index", ['Romance', "Movie"]).then(s => {
                    data.push(s)
                    getCollectionQuery("Index", ['Adventure', "Movie"]).then(s_ => {
                        data.push(s_)
                        getCollectionQuery("Index", ['Family', "Movie"]).then(s__ => {
                            data.push(s__)
                            getCollectionQuery("Index", ['Animated', "Movie"]).then(s__ => {
                                data.push(s__)
                                res.send(data)
                                return null
                            })
                        })
                    })
                })
            })
        })
    }).catch(e => {
        console.log(e)
    })
});

app.post('/next-data', (req,res)=>{
    getNextData("Index", req.body.filter, req.body.last).then(snap=>{
        res.send(snap);
        return null;
    })
})

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
    if (req.body.uid) {
        getWatching("Users", req.body.uid, "Watching").then(snap=>{
            res.send(snap)
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
            poster: req.body.poster,
            date: Date.now()
        })
        cleanCollection(req.body.uid, "Watching");
    } else {
        res.send(null)
    }
})

exports.widgets = functions.https.onRequest(app);




function getWatching(collection , doc, sub_collection){
    return new Promise((resolve, reject) => {
        var data = [];
        db.collection(collection).doc(doc).collection(sub_collection).orderBy("date", 'desc')
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
        const collection = db.collection(name)
        collection.orderBy('year', 'desc').get().then(snapshot => {
            if (snapshot.empty) {
                reject(new Error("Empty"))
            }
            else {
                snapshot.forEach(doc => {
                    if(data.length === 7){
                        resolve(data);
                        return null;
                    }
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

function getNextData(name, filter, last){
    return new Promise((resolve, reject) => {
        var data = [];
        const collection = db.collection(name)
        collection.orderBy('year', 'desc').startAfter(last).get().then(snapshot => {
            if (snapshot.empty) {
                reject(new Error("Empty"))
            }
            else {
                snapshot.forEach(doc => {
                    if(data.length === 5){
                        resolve(data);
                        return null;
                    }
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

function cleanCollection(uid, collection){
    var data = []
    var watching = db.collection("Users").doc(uid).collection(collection)

    watching.orderBy('date','desc').get()
    .then(snapshot=>{
        snapshot.forEach(doc=>{
            data.push(doc.id)
        })

        if(data.length>5){
            for(var i = data.length-1; i > 4; i--){
                watching.doc(data[i]).delete();            
            }
        }
    })
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