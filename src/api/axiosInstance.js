import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.12:5000/api", 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor (add token)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;