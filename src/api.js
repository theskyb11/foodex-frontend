import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8085', // Update with your backend API endpoint
});

export default api;
