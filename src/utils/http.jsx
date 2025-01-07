import axios from "axios";

// Use localStorage in a web environment
export const prodUrl = `http://127.0.0.1:5000/`;
// export const prodUrl = `https://prevealth.saralgroups.com/`;


export const http = axios.create({
  baseURL: prodUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    const data = localStorage.getItem('userToken');
    const lang = localStorage.getItem('lang');
    const id = JSON.parse(data)?.user?.id;
    const token = JSON.parse(localStorage.getItem('userToken'));
    const bearerAuth = token ? token : null;
    // console.log(bearerAuth)
    if (bearerAuth) config.headers.Authorization = `bearer ${bearerAuth}`;
    config.params = {
      ...config.params,
      locale: lang || "en",
      sort: 'updatedAt:desc'
    };

    if (config?.data?.data) {
      config.data.data = {
        ...config.data.data,
        // locale: lang || "en",
        user: id?.toString()
      };
    }

    console.log(`Making request to: ${config.url}`);

    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);
