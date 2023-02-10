import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: "http://www.saberwrite.com:8080/",
    headers: {
        Authorization: ""
    }
})

export const axiosAuthInstance = axios.create ({
    baseURL: "http://www.saberwrite.com:8080/",
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})


export default axiosInstance