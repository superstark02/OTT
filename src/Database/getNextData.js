import axios from 'axios';

export default function getNextData(last, filter) {
    return new Promise((resolve, reject) => {
        axios.post("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/next-data", {
            filter: filter,
            last: last
        }).then(result => {
            resolve(result.data)
        }).catch(e => {
            console.log(e);
            reject(null)
        })
    });
}