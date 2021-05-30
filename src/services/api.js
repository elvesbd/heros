import axios from 'axios';
import md5 from 'md5';

const publicKey = 'a4e21bb2dc85b749cfba2b9310910b6c';
const privateKey = 'caab23674d64ea95dcf186f091de987312f8c0fb';
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);


const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash
  }
});

export default api; 
