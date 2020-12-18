const functions = require('firebase-functions');
//const admin = require('firebase-admin');
const firebase = require('firebase-admin');
const express = require('express');
const cors = require('cors')({ origin: true });
const bodyParser = require("body-parser");
const app = express();

const config = {
    apiKey: 'AIzaSyBr6TmUxKkRcpXAb9euN3CqSDbRJ3pCsyw',
    authDomain: 'project-ott-d883c.firebaseapp.com',
    projectId: 'project-ott-d883c',
    databaseURL: 'https://project-ott-d883c.firebaseio.com',
}

firebase.initializeApp(config);

// Automatically allow cross-origin requests 
const port = process.env.PORT || 4000;
app.use(cors)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => { console.log("Listening at " + port) })
// Initialize Cloud Firestore through Firebase


///////////////////////////////////////////////////////////////////////////--------------------->HOME
var db = firebase.firestore();

var data = []

const list = [
    {
        title: 'Comedy Series To Watch',
        filter: ["Comedy", "Series"]
    },
    {
        title: 'Amzing Action',
        filter: ["Action", "Movie"]
    },
    {
        title: 'Drama Series',
        filter: ["Drama", "Series"]
    },
    {
        title: 'Fiction Series',
        filter: 'Fiction'
    },
    {
        title: 'By Netflix',
        filter: 'Netflix'
    },
    {
        title: 'Animated For Kids',
        filter: ['Animated', "Movie"]
    }
]

/*app.get('/', (req, res) => {

    getCollectionQuery("Index", list[0].filter).then(result => {

        data.push(shuffleArray(result))

        getCollectionQuery("Index", list[1].filter).then(result => {
            data.push(shuffleArray(result))

            getCollectionQuery("Index", list[2].filter).then(result => {
                data.push(shuffleArray(result))

                getCollectionQuery("Index", list[3].filter).then(result => {
                    data.push(shuffleArray(result))

                    getCollectionQuery("Index", list[4].filter).then(result => {
                        data.push(shuffleArray(result))

                        getCollectionQuery("Index", list[5].filter).then(result => {
                            data.push(shuffleArray(result))
                            res.send(data)

                            return "null"

                        }).catch(e => {
                            return e
                        })

                        return "null"

                    }).catch(e => {
                        return e
                    })

                    return "null"

                }).catch(e => {
                    return e
                })

                return "null"

            }).catch(e => {
                return e
            })

            return "null";

        }).catch(e => {
            return e
        })

        return "null"

    }).catch(e => {
        return e
    })

})*/

app.post('/continue', (req, res) => {
    if (req.body.uid) {
        getSubCollection("Users", req.body.uid, "Continue").then(snap => {
            res.send(snap)
            return null;
        }).catch(e => {
            res.send(null);
            return null;
        })
    }
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

app.post('/save-time', (req, res) => {
    if (req.body.uid) {
        saveTime(req.body.time, req.body.series_id, req.body.season, req.body.episode, req.body.uid).then(r => { return "null" })
            .catch(e => {
                return e
            })
    } else {
        req.body.uid
    }
})

app.post('/get-doc', (req, res) => {

    getDoc(req.body.name, req.body.doc_name).then(result => {
        res.send(result)
        return "null"
    }).catch(e => {
        return e
    })
})

app.post('/get-episode', (req, res) => {

    getEpisode(req.body.id, req.body.season, req.body.episode).then(snap => {
        res.send(snap)
        return "null"
    }).catch(e => {
        return e
    })
})

exports.widgets = functions.https.onRequest(app);


























/////////////////////////////////////////////////////Functions///////////////////////////////

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

function getSubCollection(collection, doc, sub_collection) {
    return new Promise((resolve, reject) => {

        var data = [];

        db.collection(collection).doc(doc).collection(sub_collection)
            .get()
            .then(snapshot => {

                snapshot.forEach(doc => {
                    data.push(doc.data())
                });

                resolve(data);
                return null;
            })
            .catch(reason => {
                reject(reason);
                return reason
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
            return e
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
                return "null"
            })
            .catch(reason => {
                reject(reason);
            });
    });
}

function saveTime(time, series_id, season, episode, uid) {
    return new Promise((resolve, reject) => {

        if (uid) {
            db.collection("Users").doc(uid).collection(series_id + "-" + season).doc(episode).set({
                time: time
            })
        }

        return "null"

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