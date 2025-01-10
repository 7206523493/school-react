import axios from "axios";

// Use localStorage in a web environment
// export const prodUrl = `http://127.0.0.1:5000/`;
export const prodUrl = `https://school-410r.onrender.com`;


export const http = axios.create({
  baseURL: prodUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  timeout: 25000,
});

http.interceptors.request.use(
  (config) => {

   

    console.log(`Making request to: ${config.url}`);

    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);
