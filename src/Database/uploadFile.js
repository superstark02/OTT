import { storage } from "../firebase";

export function uploadFile(industry, platform, id, files) {

    return new Promise((resolve, reject) => {

        var ref = storage.ref()
        var i = 0;

        for (i; i < files.length; i++) {
            var uploadTask =  ref.child(industry + "/" + platform + "/" + id + "/" + files[i].name).put(files[i])
                .then(snap => {
                    console.log("Uploaded")
                    console.log(snap)
                    resolve(1);
                }).catch(err => {
                    console.log(err)
                })

            uploadTask.on('state_changed', function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                // Handle unsuccessful uploads
            }, function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
            });
        }
    });


}