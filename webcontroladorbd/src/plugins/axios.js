// src/plugins/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5030', // cambia esta URL por la de tu API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
