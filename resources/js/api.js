// import store from './store';
import axios from 'axios';

import * as auth from './services/auth_service';

const $axios = axios.create({
    baseURL: 'http://localhost:8000/api',
        headers: {
            Authorization: 'Bearer '+auth.getAccessToken(),
        }
});

export default $axios;
