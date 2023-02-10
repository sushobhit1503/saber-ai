import {axiosAuthInstance} from './axiosInstance';

export const profileInfo = async () => {
    try {
        const res = await axiosAuthInstance ({
            url: "/api/profile",
            method:"get",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}