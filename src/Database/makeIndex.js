import { db } from "../firebase";

export function makeIndex(id, data){

    return new Promise((resolve, reject) => {

        db.collection("Index").doc(id).set(data).then(result=>{
            resolve(1);
        }).catch(error=>{
            reject(error)
        })
    });
}