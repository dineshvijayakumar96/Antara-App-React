import { jwtDecode } from "jwt-decode";
import getUserDetails from "../jwt-token/getUserDetails";
import { BASE_API_URL } from "../../api/axios";

const API_URL = BASE_API_URL;

const authProvider = {
    
    login: async ({ username, password }) => {

        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
            if(!response.ok) {
                throw new Error('Login Failed');
            }
            return response.text();
        }).then((token) => {
            localStorage.setItem('token', token);
            return Promise.resolve();
        });
    },

    logout: async () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },

    checkAuth: async () => {
        const token = localStorage.getItem('token');
        if (!token) return Promise.reject();

        try {
            const decoded = jwtDecode(token);
            const now = Date.now() / 1000;

            if (decoded.exp && decoded.exp < now) {
            localStorage.removeItem('token');
            return Promise.reject({ message: 'Session expired' });
            }

            return Promise.resolve();
        } catch (e) {
            console.error(e);
            localStorage.removeItem('token');
            return Promise.reject();
        }
    },

    getPermissions: async () => {
        const token = localStorage.getItem('token');
        if (!token) return Promise.reject();

        try {
            const decoded = jwtDecode(token);
            const roles = decoded.roles || [];

            return Promise.resolve(roles);
        } catch (e) {
            console.error(e);
            return Promise.reject();
        }
    },

    getIdentity: async () => {
        const userDetails = getUserDetails();
        const username = userDetails.username;
        const capName = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
        
        return Promise.resolve({
            id: "user",
            fullName: capName,
            avatar: null,
        });
    },

    checkError: async (error) => {

        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }

        if (error.status >= 500) {
            localStorage.removeItem('auth');
            window.location.href = '/antara-admin/login';
            return Promise.reject();
        }

        return Promise.resolve();
    },
};

export default authProvider;