import Fetch from 'whatwg-fetch';

var link = 'https://api.imgur.com/3';
var clientID = '67aff2412cd10cb';

module.exports = {
    getTopic(){
        return fetch(link + '/topics/defaults', {
            headers: {
                Authorization: 'ClientID ' + clientID,
            }
        }).then(response => {
            return response.json();
        });
    }
}

