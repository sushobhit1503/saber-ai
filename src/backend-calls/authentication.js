import axiosInstance from './axiosInstance';

export const login = async (email, password) => {
    const data = {
        "email": email,
        "password": password 
    }
    try {
        const res = await axiosInstance ({
            url: "/api/login",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}

export const signup = async (name, email, password, confirmPassword) => {
    const data = {
        "email": email,
        "name": name,
        "confirmPassword": confirmPassword,
        "password": password 
    }
    try {
        const res = await axiosInstance ({
            url: "/api/signup",
            method:"post",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return error.message
    }
}