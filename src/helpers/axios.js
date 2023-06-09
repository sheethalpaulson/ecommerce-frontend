import Axios from 'axios';

let BASE_URL = "https://sheethal-ecommerce-services.onrender.com";
// BASE_URL = "http://localhost:4000";

const axios = Axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

axios.interceptors.request.use((request) => {
    const token = localStorage.getItem('token') ?? null;
    if ( token ) {
      request.headers.Authorization = `Bearer ${token}`;
    }
     
    return request;
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response?.status === 401) {}
  return Promise.reject(error)
});

export default axios;