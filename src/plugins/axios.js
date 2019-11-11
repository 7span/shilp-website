import axios from "axios";

// DEFAULT CONFIG
const config = {
  baseURL: process.env.VUE_APP_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json"
  }
};

// INSTANCE
const $axios = axios.create(config);

// SET TOKEN
// Allows to set the token of axios instance after login
const setToken = token => {
  $axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

if (localStorage.getItem("token")) {
  setToken(localStorage.getItem("token"));
}

export default $axios;
export { setToken };
