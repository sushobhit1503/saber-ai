import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: "http://saberwrite.com/",
    headers: {
        Authorization: ""
    },
    timeout: 1000
})

export const axiosAuthInstance = axios.create ({
    baseURL: "http://saberwrite.com/",
    headers: {
        Authorization: `${localStorage.getItem("token")}`
    },
    timeout: 1000
})


export default axiosInstance