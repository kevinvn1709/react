import axios from 'axios';

const API_KEY = 'AIzaSyAJQDtqYerO6xT1-YsB9ArewrS_976u4Fg';
const apiYoutube = 'https://www.googleapis.com/youtube/v3/search/';

module.exports = {
    search(term, callback){
        var params = {
            part: 'snippet',
            key: API_KEY,
            q: term,
            type: 'video'
        }

        axios.get(apiYoutube, {params: params}).then(response => {
            if (callback) {
                callback(response.data.items);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}