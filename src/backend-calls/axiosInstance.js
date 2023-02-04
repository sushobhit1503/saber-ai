/* eslint-disable */
import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: "http://172.16.246.180:8080",
    headers: {
        Authorization: ""
    },
    timeout: 1000
})

export default axiosInstance