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

app.get('/', (req, res) => {
    var data = []
    getCollectionQuery("Index", ["Comedy", "Series"]).then(snap => {
        data.push(snap)
        getCollectionQuery("Index", ["Action", "Movie"]).then(sna => {
            data.push(sna)
            getCollectionQuery("Index", ["Drama", "Series"]).then(sn => {
                data.push(sn)
                getCollectionQuery("Index", ['Animated', "Movie"]).then(s => {
                    data.push(s)
                    res.send(data)
                    return null
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

    if(req.body.id && req.body.season && req.body.episode){
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

exports.widgets = functions.https.onRequest(app);



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

function getTime(searies_id, season, episode, uid) {
    return new Promise((resolve, reject) => {
        db.collection("Users").doc(uid).collection(searies_id + "-" + season).doc(episode)
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