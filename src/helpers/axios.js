import Axios from 'axios';

let BASE_URL = "https://sheethal-ecommerce-services.onrender.com";
// BASE_URL = "http://localhost:4000";

const axios = Axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
  },
  withCredentials: true,
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response?.status === 401) {
    console.log('401 - Forbidden');
  }
  return Promise.reject(error)
});

export default axios;