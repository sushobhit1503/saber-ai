import React, { useEffect } from "react";
import "../styles/ServicePage.css"
import "../styles/ProfilePage.css"
import { paymentSuccessRedirect } from "../backend-calls/services";
import { useNavigate } from "react-router-dom";


const PaymentSuccessRedirect = ()=> {
    const navigate = useNavigate();
    useEffect(async()=>{
        const res = await paymentSuccessRedirect()
        if(!res.error) navigate("/")
    },[]);
    
    return (
        <div>
            <div className="page-heading">Payment Successfull. Redirecting.....</div>
        </div>
    )
    
}

export default PaymentSuccessRedirect