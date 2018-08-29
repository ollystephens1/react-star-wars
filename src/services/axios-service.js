import axios from 'axios';

const instance = axios.create({
  baseUrl: 'swapi.co/api'
});

export default instance;
