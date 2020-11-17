import axios from 'axios';

const api = axios.create({
  baseURL: "http://00.0.0.000:4000", // coloque seu ip
});

export default api;