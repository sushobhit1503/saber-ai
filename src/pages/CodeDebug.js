import React from "react";
import { Input } from "reactstrap";
import { Button, Tooltip } from "ui-neumorphism";
import "../styles/ServicePage.css";
import { coldEmail } from "../backend-calls/services";

class CodeDebug extends React.Component {
    constructor () {
        super ()
        this.state = {
            code: "",
            error: "",
            reply: "",
            tone: "",
            seo: false,
            words: 0,
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
        const submitEmail = async () => {
            const { companyName, serviceDescription} = this.state
            const res = await coldEmail(companyName, serviceDescription)
            if(res.error){
                alert(res.msg)
            }else{
                this.setState ({reply: res.data})
            }
        }
        const copyToClipBoard = () => {
            navigator.clipboard.writeText(this.state.reply)
        }
        return (
            <div>
                <div className="page-heading">
                <Tooltip bottom content={<div> 
                    Enter your code and the error to generate your fix
                </div>}>
                   <b>CODE DEBUGGING</b>
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>Enter The Code Details Here:</b></div>
                        <div className="page-card-label">Code</div>
                        <Input className={`input-${this.state.mode}`} style={{height:"20rem"}} placeholder="Enter the code here" onChange={onChange} value={this.state.code} name="code" type="textarea" />
                        <div className="page-card-label">Error Received</div>
                        <Input className={`input-${this.state.mode}`} style={{height:"12rem"}}  placeholder="eg. Can not access undefined variable" onChange={onChange} value={this.state.error} name="error" type="textarea" />
                        <div>Describe the service you provide for the email content.</div>
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitEmail} style={{marginTop: "1rem", width:"100%"}}>
                            Generate Correct Code
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See The Fix Here:</b></div>
                        <div className="page-card-label">Follow this to fix your error</div>
                        <Input className={`input-${this.state.mode}`} style={{height:"30rem"}} value={this.state.reply} type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeDebug