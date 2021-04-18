import axios from 'axios'

const KEY = 'AIzaSyBicew2Q6UoLKlLzIIimdXKOFCz8gZQQvE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})