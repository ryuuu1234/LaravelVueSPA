import {http, httpFile} from './http_service';
import jwt from 'jsonwebtoken';

import store from '../store';

export function register(user) {
    return http().post('/auth/register', user);
}

export function updateProfile(id, data) {
    return http().put(`/user/update-profile/${id}`, data);
}

export function updateImage(id, data) {
    return httpFile().post(`/user/update-image/${id}`, data);
}

export function login(user) {
    return http().post('/auth/login', user)
        .then(response => {
            if (response.status === 200) {
                setToken(response.data);
            }
            return response.data;
    });
}

function denger(user) {
  // console.log("user", user);
  let userId = user.user.id;
  window.Pusher = require("pusher-js");
  let echo = new Echo({
    broadcaster: "pusher",
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true,
    auth: {
      headers: {
        Authorization: "Bearer " + user.access_token
      }
    }
  });

  echo.private("App.User." + userId).notification(data => {
    store.dispatch("notification/getNotifications")
    store.dispatch("notification/getOrderNotif")
          
  });
  store.dispatch("notification/getNotifications");
}


export function getUserId() {
    const token = localStorage.getItem("Laravel-vue-spa-token");
        if (!token) {
            return null;
        }

    const tokenData = jwt.decode(token);
    console.log("data", tokenData);
    return tokenData.user.user.id;
}

function setToken(user) {

    const token = jwt.sign({ user: user }, 'secretkeynyajwtpluginokee2020');
    localStorage.setItem('Laravel-vue-spa-token', token);

    store.dispatch('authenticate', user.user)
}

export function isLoggedIn() {
    const token = localStorage.getItem('Laravel-vue-spa-token');
    return token != null;
}

export function logout() {
   http('/auth/logout');
   localStorage.removeItem('Laravel-vue-spa-token');
}

export function getAccessToken() {
    const token = localStorage.getItem('Laravel-vue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function getProfile() {
    return http().get('/auth/profile');
}

