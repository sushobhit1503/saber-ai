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
            words: 0
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const onChangeSeo = (event) => {
            this.setState ({seo: event.checked})
        }
        const toggleAdvanced = () => {
            this.setState ({showAdvancedOptions: !this.state.showAdvancedOptions})
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
                <Tooltip bottom content={<div> </div>}>
                    CODE DEBUGGING
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className="page-card card">
                        <div className="page-card-heading"><b>Enter the code details here:</b></div>
                        <div className="page-card-label">Code</div>
                        <Input className="input mailBox" placeholder="Enter the code here" onChange={onChange} value={this.state.code} name="code" type="textarea" />
                        <div className="page-card-label">Error Received</div>
                        <Input className="input mailBox" placeholder="eg. Can not access undefined variable" onChange={onChange} value={this.state.error} name="error" type="textarea" />
                        <div>Describe the service you provide for the email content.</div>
                        <Button onClick={submitEmail} style={{marginTop: "1rem", width:"100%"}}>
                            Generate Correct Code
                        </Button>
                    </div>
                    <div className="page-card card">
                        <div className="page-card-heading"><b>See the fix here:</b></div>
                        <div className="page-card-label">Follow this to fix your error</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeDebug