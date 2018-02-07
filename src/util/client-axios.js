import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
export const axiosWWW = axios.create({
    baseURL: isDev ? '/www' : 'http://www.chunbo.com',
    timeout: 3000
})

export const axiosDefault = axios.create({
  timeout: 3000
})

export const axiosAPI = axios.create({
    baseURL: isDev ? '/api' : 'http://api.chunbo.com',
    timeout: 3000
})