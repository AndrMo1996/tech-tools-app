import axios from 'axios';

export const TrujayAPI = axios.create({
    baseURL: 'http://localhost:8088/api/trujay/entities?applicationKey=f938a08d55104ef6bd47c42b4d0c62536f4d0040&filter={"type":"unified"}',
    headers: {
        'X-API2CRM-APPLICATION-KEY': 'f938a08d55104ef6bd47c42b4d0c62536f4d0040',
        'X-API2CRM-USER-KEY': 'dd28a647067e6dae0b3cb3be668cd8ab'
    }
})