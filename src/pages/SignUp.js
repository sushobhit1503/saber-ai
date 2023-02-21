import React from "react";
import { Input, Label } from "reactstrap";
import { Card, Button } from "ui-neumorphism";
import "../styles/ServicePage.css";
import { signup } from "../backend-calls/authentication";
import Logo from '../assets/saber-logo.png';
import { Navigate } from "react-router-dom";

class SignUp extends React.Component {
    constructor () {
        super ()
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            isOtp: false,
            mode: ""
        }
    }
    componentDidMount () {
        this.setState ({mode: localStorage.getItem("mode")})
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const signUpall = () => {
            const response = signup(this.state.name, this.state.email, this.state.password, this.state.confirmPassword)
            response.then (result => {
                console.log(result);
                localStorage.setItem("email", this.state.email)
                this.setState ({isOtp: true})
            }).catch (err => console.log(err.message))
        }

        if (this.state.isOtp) return <Navigate to="/otp" />
        return (
            <div style={{marginTop:"2rem"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
                    <img src={Logo} alt="saber-ai" className='logo-image card' />
                    <div className='logo-name'>SABER AI</div>
                </div>
                <div className="page-heading">
                    CREATE AN ACCOUNT
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Card className="page-card">
                        <Label>Enter your name</Label>
                        <Input className={`input-${this.state.mode}`} placeholder="Your Name" onChange={onChange} value={this.state.name} name="name" />
                        <Label>Enter your email</Label>
                        <Input className={`input-${this.state.mode}`} placeholder="Your Email" onChange={onChange} value={this.state.email} name="email" />
                        <Label>Enter Password</Label>
                        <Input className={`input-${this.state.mode}`} placeholder="Password" onChange={onChange} value={this.state.password} name="password" type="password" />
                        <Label>Re-Enter Password</Label>
                        <Input className={`input-${this.state.mode}`} placeholder="Confirm Password" onChange={onChange} value={this.state.confirmPassword} name="confirmPassword" type="password" />
                        <Button onClick={signUpall} style={{marginTop: "1rem", marginBottom: "1rem"}}>
                            Register
                        </Button>
                        <div>
                            Already have an account? <a href="/login" >Login Here</a>
                        </div>
                        <div style={{fontSize:"0.75rem", textAlign:"center"}}>
                            By clicking Register, you agree to our <a href="https://www.saber-ai.com/termsandconditions"> Terms of Service </a> <br /> and that you have read our <a href="https://www.saber-ai.com/privacypolicy"> Privacy Policy </a>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SignUp