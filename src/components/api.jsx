import axios from 'axios';
const api = axios.create({
  baseURL: 'https://cbtcarrentalapi.blueberry-travel.com/',
});

export default api;