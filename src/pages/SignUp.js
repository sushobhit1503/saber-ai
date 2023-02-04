import React from "react";
import { Input, Label } from "reactstrap";
import { Card, Button } from "ui-neumorphism";
import "../styles/ServicePage.css";
import { signup } from "../backend-calls/authentication";

class SignUp extends React.Component {
    constructor () {
        super ()
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
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
            }).catch (err => console.log(err.message))
        }
        return (
            <div>
                <div className="page-heading">
                    CREATE AN ACCOUNT
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Card className="page-card">
                        <Label>Enter your name</Label>
                        <Input className="input" placeholder="Your Name" onChange={onChange} value={this.state.name} name="name" />
                        <Label>Enter your email</Label>
                        <Input className="input" placeholder="Your Email" onChange={onChange} value={this.state.email} name="email" />
                        <Label>Enter Password</Label>
                        <Input className="input" placeholder="Password" onChange={onChange} value={this.state.password} name="password" type="password" />
                        <Label>Re-Enter Password</Label>
                        <Input className="input" placeholder="Confirm Password" onChange={onChange} value={this.state.confirmPassword} name="confirmPassword" type="password" />
                        <Button onClick={signUpall} style={{marginTop: "1rem", marginBottom: "1rem"}}>
                            Register
                        </Button>
                        <div>
                            Already have an account? <a href="/login" >Login Here</a>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SignUp