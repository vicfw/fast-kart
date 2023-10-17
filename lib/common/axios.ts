import axios from "axios";
import { decryptToken } from "../utils";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = decryptToken();
    const auth = token ? `Bearer ${token}` : "";
    config.headers["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
