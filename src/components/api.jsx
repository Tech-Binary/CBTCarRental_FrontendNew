import axios from 'axios';
const api = axios.create({
    baseURL: 'https://cbtadmin.blueberry-travel.com/api',
});

export default api;
