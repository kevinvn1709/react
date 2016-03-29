import axios from 'axios';

const API_KEY = '';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';

module.exports = {
    getAllPosts: function () {
        const url = ROOT_URL + '/' + API_KEY;
        return axios.get(url);
    }
}
