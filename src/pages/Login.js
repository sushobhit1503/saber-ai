import React from "react";
import { Input, Label } from "reactstrap";
import { Card, Button} from "ui-neumorphism";
import { login } from "../backend-calls/authentication";
import "../styles/ServicePage.css";
import Logo from '../assets/saber-logo.png';

class Login extends React.Component {
    constructor () {
        super ()
        this.state = {
            email: "",
            password: ""
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const loginCall = () => {
            const response = login(this.state.email, this.state.password)
            response.then (result => {
                console.log(result);
                localStorage.setItem("token", result.data)
            }).catch (err => console.log(err.message))
        }
        return (
            <div style={{marginTop: "5rem"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
                    <img src={Logo} alt="saber-ai" className='logo-image card' />
                    <div className='logo-name'>SABER AI</div>
                </div>
                <div className="page-heading">
                    LOGIN TO YOUR ACCOUNT
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Card className="page-card">
                        <Label>Enter your email</Label>
                        <Input className="input" placeholder="Your Email" onChange={onChange} value={this.state.email} name="email" />
                        <Label>Enter Password</Label>
                        <Input className="input" placeholder="Password" onChange={onChange} value={this.state.password} name="password" type="password" />
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
}

export default Login