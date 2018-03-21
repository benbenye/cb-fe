import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
export const axiosWWW = axios.create({
    baseURL: isDev ? '/www' : 'http://www.chunbo.com',
    timeout: 3000
})

export const axiosAPIMock = axios.create({
  baseURL: isDev ? 'https://easy-mock.com/mock/5a712d21eaec52606d71e4e7/cb-fe' : 'http://api.chunbo.com',
  timeout: 3000
})

export const axiosAPI = axios.create({
    baseURL: isDev ? '/api' : 'http://api.chunbo.com',
    timeout: 3000
})