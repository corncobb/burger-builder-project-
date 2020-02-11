import axios from 'axios';
import data from './config'

const instance = axios.create({
    baseURL: data.firebase.baseURL
});

export default instance;