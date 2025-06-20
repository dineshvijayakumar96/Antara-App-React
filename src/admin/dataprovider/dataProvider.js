import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
import { BASE_API_URL } from '../../api/axios';

const API_URL = BASE_API_URL;

const httpClient = (url, options = {}) => {

    if(!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }

    const token = localStorage.getItem('token');

    if(token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }

    return fetchUtils.fetchJson(url, options);
};

export default simpleRestProvider(API_URL, httpClient);