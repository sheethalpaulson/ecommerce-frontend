import Axios from 'axios';

let BASE_URL = "https://sheethal-ecommerce-services.onrender.com";

const axios = Axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    console.log('401 - Forbidden');
  }
  return Promise.reject(error)
});

export default axios;