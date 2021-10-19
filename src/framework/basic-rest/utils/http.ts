import axios from "axios";
import { getToken } from "./get-token";

const http = axios.create({
  baseURL:"http://localhost:3000/api" ,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
//i removed the following variable for now because i'm not sure if it's accessible here, since this code runs on the client
//process.env.NEXT_PUBLIC_REST_API_ENDPOINT
//http://localhost:3000/api
// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
