import axios from 'axios';

const API_KEY = '3ba1b53e3362b77db4bc4c6aad2fdd68';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

module.exports = {
    getInfo: function (city) {
        const url = `${ROOT_URL}&q=${city},us`;
        return axios.get(url);
    }
}
