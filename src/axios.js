import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-rk.herokuapp.com',
});

export default instance;