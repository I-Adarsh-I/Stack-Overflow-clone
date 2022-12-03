import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'})

export const logIn = (authdata) => API.post('/User/login', authdata)
export const signUp = (authdata) => API.post('/User/signup', authdata)
