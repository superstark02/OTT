const functions = require('firebase-functions');
const firebase = require("firebase");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBr6TmUxKkRcpXAb9euN3CqSDbRJ3pCsyw',
    authDomain: 'project-ott-d883c.firebaseapp.com',
    projectId: 'project-ott-d883c'
});


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
        filter: 'Animated'
    }
]

exports.api = functions.https.onCall((data, context) => {

    for (var i = 0; i < list.length; i++) {
        if (list[i].filter.length > 2) {
            getByWord("Index", list[i].filter).then(result => {
                data.push(shuffleArray(result))
            })
        } else {
            getCollectionQuery("Index", list[i].filter).then(result => {
                data.push(shuffleArray(result))
            })
        }
    }

});

function getCollectionQuery(name, filter) {

    return new Promise((resolve, reject) => {

        var data = [];
        const collection = db.collection(name);

        collection.get().then(snapshot => {
            if (snapshot.empty) {
                reject("Empty")
            }
            else {
                snapshot.forEach(doc => {
                    if (search(doc.data().keywords, filter[0]) && search(doc.data().keywords, filter[1]) ) {
                        if(notAnime(doc.data().keywords)){
                            data.push(doc.data())
                        }
                    }
                });
                resolve(data)
            }
        }).catch(e => {
            reject(e)
        })
    });
}

function search(array, filter){
    for(var k = 0; k < array.length; k++){
        if(array[k]===filter){
            return true
        }
    }
    return false
}

function notAnime(array){
    for(var k = 0; k < array.length; k++){
        if(array[k]==="Anime"){
            return false
        }
    }
    return true
}
////////////////////////////////////////////////////////////////
