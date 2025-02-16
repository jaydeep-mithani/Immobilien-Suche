import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_URL_DEPLOYMENT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
