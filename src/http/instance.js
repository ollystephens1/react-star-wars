import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://swapi.co/api/'
});

export default instance;
