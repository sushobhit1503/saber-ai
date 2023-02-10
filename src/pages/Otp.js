import React from "react";
import { Input, Label } from "reactstrap";
import { Card, Button } from "ui-neumorphism";
import "../styles/ServicePage.css";
import { verifyEmail } from "../backend-calls/authentication";
import Logo from '../assets/saber-logo.png';
import { Navigate } from "react-router-dom";

class Otp extends React.Component {
    constructor () {
        super ()
        this.state = {
            otp: "",
            isVerified: false
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const verify = () => {
            const res = verifyEmail (localStorage.getItem("email"), this.state.otp)
            res.then (result => {
                if (result.data === "success")
                    this.setState ({isVerified: true}, () => localStorage.removeItem("email"))
            }).catch (err => console.log(err.message))
        }
        if (this.state.isVerified) return <Navigate to="/" />
        return (
            <div style={{marginTop:"2rem"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
                    <img src={Logo} alt="saber-ai" className='logo-image card' />
                    <div className='logo-name'>SABER AI</div>
                </div>
                <div className="page-heading">
                    ENTER OTP SENT
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Card className="page-card">
                        <Label>Enter the otp </Label>
                        <Input className="input" placeholder="One Time Password" onChange={onChange} value={this.state.otp} name="otp" />
                        <Button onClick={verify} style={{marginTop: "1rem", marginBottom: "1rem"}}>
                            Register
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Otp