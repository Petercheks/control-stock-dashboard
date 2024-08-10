import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});

api.interceptors.request.use(config => {
  config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyMzIzODc0M30.P-8g4UqWsDy98J1EAvCnpOUyiVxMvOFdOa8dvK5EBSE";
  return config;
});

export default api;