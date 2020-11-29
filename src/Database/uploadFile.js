import { storage } from "../firebase";

export function uploadFile(industry, platform, id, files) {

    return new Promise((resolve, reject) => {

            var ref = storage.ref()
            var i = 0;

            for(i; i<files.length; i++){
                ref.child(industry+"/"+platform+"/"+id+"/"+files[i].name).put(files[i])
                .then(snap=>{
                    console.log("Uploaded")
                    resolve(1);
                }).catch(err=>{
                    console.log(err)
                })
            }
    });


}