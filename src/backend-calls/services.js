import axiosInstance from './axiosInstance';

export const emailGen = async (loginInput, inputType) => {
    const data = {
        loginInput: loginInput,
        inputType: inputType
    }
    try {
        const res = await axiosInstance ({
            url: "/user_profile",
            method:"get",
            data: data
        })
        return res.data;
        
    } catch (error) {
        return "Some Error Occurred"
    }
}