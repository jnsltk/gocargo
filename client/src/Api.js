import { getToken } from './utils/auth'
import axios from 'axios'

const token = getToken();
export const Api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_ENDPOINT || 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: ' + token
    },
});