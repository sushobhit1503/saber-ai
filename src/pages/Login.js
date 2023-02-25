import React, { useEffect, useState } from "react";
import { Input, Label } from "reactstrap";
import { Card, Button} from "ui-neumorphism";
import { login } from "../backend-calls/authentication";
import "../styles/ServicePage.css";
import Logo from '../assets/saber-logo.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [mode, setMode] = useState ("")
    const navigate = useNavigate ()

    useEffect (() => {
        setMode(localStorage.getItem("mode"))
    }, [])
    const onChange = (event) => {
            const { name, value } = event.target
            if (name === "email")
                setEmail(value)
            else 
                setPassword (value)
        }
        const loginCall = async() => {
            const response = await login(email, password)
            console.log(response.data);
            localStorage.setItem("token", response.data)
            navigate("/")
        }
        return (
            <div style={{paddingTop:"5rem", height:"100vh"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
                    <img src={Logo} alt="saber-ai" className='logo-image card' />
                    <div className='logo-name'>SABER AI</div>
                </div>
                <div className="page-heading">
                    LOGIN TO YOUR ACCOUNT
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Card dark={mode === "dark" ? true : false} className="page-card">
                        <Label>Enter your email</Label>
                        <Input className={`input-${mode}`}  placeholder="Your Email" onChange={onChange} value={email} name="email" />
                        <Label>Enter Password</Label>
                        <Input className={`input-${mode}`}  placeholder="Password" onChange={onChange} value={password} name="password" type="password" />
                        <Button onClick={loginCall} style={{marginTop: "1rem", marginBottom: "1rem"}}>
                            Login
                        </Button>
                        <div>
                            Don't have an account? <a href="/sign-up" >Signup Here</a>
                        </div>
                    </Card>
                </div>
            </div>
        )
}

export default Login