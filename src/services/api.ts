import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.202.2:5000',
});

export default api;
