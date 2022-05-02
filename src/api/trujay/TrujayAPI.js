import axios from 'axios';

export const TrujayAPI = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        'X-API2CRM-APPLICATION-KEY': 'f938a08d55104ef6bd47c42b4d0c62536f4d0040',
        'X-API2CRM-USER-KEY': 'dd28a647067e6dae0b3cb3be668cd8ab'
    }
})