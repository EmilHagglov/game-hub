import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '68ddc7732391444abaae25b9ac598df4'
    }
})