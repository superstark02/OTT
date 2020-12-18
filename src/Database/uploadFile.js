import { storage } from "../firebase";
import getDoc from './getDoc'
import { db } from "../firebase";

export function check (){
    var list = []
    var store = []
    getWatching("Users", "a", "Watching").then(snap=>{
        store.push(snap.length)
        for(var i = 0; i < snap.length ; i++){
            getDoc("Index", snap[i].id).then(sna=>{
                list.push(sna);
                if(i === store[0]){
                    console.log("REsult",list)
                }
            })
        }
    }).catch(e=>{
        console.log(e)
    })
}

function getWatching(collection , doc, sub_collection){
    return new Promise((resolve, reject) => {
        var data = [];
        db.collection(collection).doc(doc).collection(sub_collection)
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