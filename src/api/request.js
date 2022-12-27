import axios from 'axios';

const API_URL = 'http://localhost:3000';

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
