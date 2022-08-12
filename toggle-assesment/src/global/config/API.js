import axios from 'axios';

const baseUrl = 'https://currencyapi-net.p.rapidapi.com/';
const backEndURL = 'api';
const host = 'currencyapi-net.p.rapidapi.com';

const API = axios.create({
  baseURL: baseUrl,
});

const APIBackend = axios.create({
  baseURL: backEndURL,
});

API.defaults.headers.common['X-RapidAPI-Key'] = process.env.REACT_APP_API_KEY;
API.defaults.headers.common['X-RapidAPI-Host'] = host;

export { API, APIBackend };
