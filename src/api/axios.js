import axios from "axios";

const BASE_API_URL = "https://antara-application-latest.onrender.com/api";

const API = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type' : 'application/json',
    },
});

API.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
    }
    return config;
});

export default API;
export { BASE_API_URL };