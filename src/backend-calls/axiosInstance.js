/* eslint-disable */
import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: "http://localhost:8000",
    headers: {
        Authorization: ""
    },
    timeout: 1000
})

export default axiosInstance