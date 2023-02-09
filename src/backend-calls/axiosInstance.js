import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: "http://www.saberwrite.com:8080/",
    headers: {
        Authorization: ""
    },
    timeout: 5000
})

export const axiosAuthInstance = axios.create ({
    baseURL: "http://www.saberwrite.com:8080/",
    headers: {
        Authorization: `${localStorage.getItem("token")}`
    },
    timeout: 1000
})


export default axiosInstance